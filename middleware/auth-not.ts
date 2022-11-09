/** 未ログイン専用ページ */
export default defineNuxtRouteMiddleware(() => {
  const { $user } = useNuxtApp()
  const { alert } = useUI()

  if ($user.state.value) {
    alert.showAlert('ログイン中はアクセス出来ません。', 'warning')
    return navigateTo('/')
  }
})
