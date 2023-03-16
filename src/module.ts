import { join } from 'node:path'
import {
  addImportsDir,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import defu from 'defu'
import { name, version } from '../package.json'
import type { OptionPlugin } from '.'

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
      baseUrl: process.env.CHATWOOT_URL || 'https://app.chatwoot.com',
      websiteToken: process.env.CHATWOOT_TOKEN || '',
    },
    partytown: false,
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.chatwoot = defu(
      nuxt.options.runtimeConfig.public.chatwoot,
      {
        init: options.init,
        settings: options.settings,
        partytown: options.partytown || false,
      } as ModuleOptions,
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
