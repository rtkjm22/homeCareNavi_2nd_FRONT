export default defineNuxtRouteMiddleware(async ({ meta }) => {
  const { $user, $api } = useNuxtApp()
  const { alert } = useUI()

  const { layout } = meta

  if (!$user.state.value) {
    alert.showAlert('ログインしてください。', 'warning')
    return navigateTo(`/${layout}/login`)
  }

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

  // 使用しているレイアウトが'client'なら、ユーザーのTypeが'Client'でない場合は弾かれる。
  // 同様にレイアウトが'manager'なら、ユーザのTypeが'Manager'ではない場合は弾かれる。
  if ($user.state.value.type.toLowerCase() !== layout) {
    alert.showAlert('ページのアクセス権がありませんでした', 'warning')
    return navigateTo('/')
  }
})
