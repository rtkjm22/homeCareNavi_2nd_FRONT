/** クライアント専用ページ */
export default defineNuxtRouteMiddleware(async () => {
  const { $user, $api } = useNuxtApp()
  const { alert } = useUI()

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
    alert.showAlert('ログインしてください。', 'warning')
    return navigateTo('/client/login')
  }

  if (!$user.isClient.value) {
    alert.showAlert('ページのアクセス権がありませんでした', 'warning')
    return navigateTo('/')
  }
})
