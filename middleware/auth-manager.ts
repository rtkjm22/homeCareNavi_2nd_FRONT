/** ケアマネ専用ページ */
export default defineNuxtRouteMiddleware(async () => {
  const { $user, $api } = useNuxtApp()
  const { showAlert } = useAlert()

  // ページ遷移するたびにAPIに通信し、トークンを検証する。トークンが誤っていればユーザー情報は消去される。
  await $api.client.api.v1.auth.validate_token.get()
    .then(({ body, headers }) => {
      $api.setAuthHeaders(headers)
      $user.setUserState(body.data)
    })
    .catch(() => {
      $api.clearAuthHeaders()
      $user.clearUserState()
    })

  if (!$user.state.value) {
    showAlert('ログインしてください。', 'warning')
    return navigateTo('/manager/login')
  }

  if (!$user.isManager.value) {
    showAlert('ページのアクセス権がありませんでした', 'warning')
    return navigateTo('/')
  }
})
