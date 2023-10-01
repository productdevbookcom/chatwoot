export default defineNuxtConfig({
  modules: ['../src/module.ts'],
  chatwoot: {
    init: {
      websiteToken: 'b6BejyTTuxF4yPt61ZTZHjdB',
    },
    settings: {
      locale: 'en',
      position: 'left',
      launcherTitle: 'Hello Chat',
    },
  },
  typescript: {
    tsConfig: {
      include: [
        '../../tests/**/*.ts',
        '../../*.ts',
        '../../src/**/*.ts',
      ],
      compilerOptions: {
        paths: {
          '~/vue/*': [
            '../playground-vue/*',
          ],
          '~/vue': [
            '../playground-vue',
          ],
        },
      },
    },
  },
})
