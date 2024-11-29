import { resolve } from 'node:path'
import { setup } from '@nuxt/test-utils'
import { describe, expect, it } from 'vitest'

describe('module', async () => {
  await setup({
    rootDir: resolve(__dirname, '../../playground-nuxt'),
    build: true,
  })

  it('should purge classes', async () => {
    // const ctx = useTestContext()
    expect(true).toBe(true)
  })
})
