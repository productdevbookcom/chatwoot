import { join } from 'node:path'
import {
  addImportsDir,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import defu from 'defu'
import { name, version } from '../package.json'
import type { OptionPlugin } from './runtime/vue'

export interface ModuleOptions extends OptionPlugin {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'chatwoot',
    compatibility: {
      nuxt: '^3.3.1',
    },
  },
  defaults: {
    init: {
      // eslint-disable-next-line node/prefer-global/process
      websiteToken: process.env.CHATWOOT_TOKEN as string || '',
      /* In this code, `process` is a global object in Node.js that provides information and
      control over the current Node.js process. It allows you to access environment
      variables, command-line arguments, and other process-related information. */
      // eslint-disable-next-line node/prefer-global/process
      baseUrl: process.env.CHATWOOT_URL || 'https://app.chatwoot.com',
    },
    partytown: false,
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.chatwoot = defu(
      nuxt.options.runtimeConfig.public.chatwoot,
      options,
    )

    const runtimeDir = resolve('./runtime')

    addImportsDir(join(runtimeDir, 'composables'))

    addPlugin({ src: join(runtimeDir, 'plugin'), mode: 'client' })
  },
})

declare module '@nuxt/schema' {
  interface ConfigSchema {
    publicRuntimeConfig?: {
      chatwoot?: ModuleOptions
    }
  }
}
