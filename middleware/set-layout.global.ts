/** ユーザータイプに応じてレイアウトを切り替える */
export default defineNuxtRouteMiddleware(() => {
  const { $user } = useNuxtApp()

  let layout = 'default'

  if ($user.isClient.value) { layout = 'client' }
  if ($user.isManager.value) { layout = 'manager' }

  setPageLayout(layout)
})
