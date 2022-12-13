/** 未ログイン専用ページ */
export default defineNuxtRouteMiddleware(() => {
  const { $user } = useNuxtApp()
  const { showAlert } = useAlert()

  if ($user.state.value) {
    showAlert('ログイン中はアクセス出来ません。', 'warning')
    return navigateTo('/')
  }
})
