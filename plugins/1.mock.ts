/**
 * 一番最初にこのプラグインを読み込むことで、他のプラグインのAPIリクエストより先にモック化する。
 * @see https://v3.nuxtjs.org/guide/directory-structure/plugins#plugin-registration-order
 */

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig().public
  // 'npm run dev_mock'で起動した場合はモックを立ち上げる
  if (config.enabledMock) {
    await import('~/mocks/browser').then(async ({ worker }) => {
      await worker.start({ onUnhandledRequest: 'bypass' })
    })
  }
})
