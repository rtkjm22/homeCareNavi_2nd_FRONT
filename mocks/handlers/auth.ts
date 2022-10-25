import { rest } from 'msw'
import { CLIENT_HEADERS, MANAGER_HEADERS, BASE_PATH } from './utils'
import openapi from '~/openapi.json'

/**
 * 前提：
 * １ ヘッダーのuidが 'Client' ならクライアント、'Manager'ならマネージャーとする
 * ２ ログイン時のメールアドレスが 'manager' から始まればマネージャー、それ以外はクライアントとする
*/
export const auth = [
  /** ユーザー新規登録 */
  rest.post(`${BASE_PATH}/api/v1/auth`, (req, res, ctx) => {
    const body = openapi.paths['/api/v1/auth'].post.responses['200'].content['application/json'].examples['example-1'].value

    return res(
      ctx.json(body)
    )
  }),

  /** 登録者情報更新 */
  rest.patch(`${BASE_PATH}/api/v1/auth`, (req, res, ctx) => {
    const body = openapi.paths['/api/v1/auth'].patch.responses['200'].content['application/json'].examples['example-1'].value
    let headers = CLIENT_HEADERS

    const type = req.headers.get('uid')
    if (type === 'Manager') {
      body.data.type = 'Manager'
      headers = MANAGER_HEADERS
    }

    return res(
      ctx.set(headers),
      ctx.json(body)
    )
  }),

  /** 退会 */
  rest.delete(`${BASE_PATH}/api/v1/auth`, (req, res, ctx) => {
    const body = openapi.paths['/api/v1/auth'].delete.responses['200'].content['application/json'].examples['example-1'].value

    return res(
      ctx.json(body)
    )
  }),

  /** トークン検証 */
  rest.get(`${BASE_PATH}/api/v1/auth/validate_token`, (req, res, ctx) => {
    const body = openapi.paths['/api/v1/auth/validate_token'].get.responses['200'].content['application/json'].examples['example-1'].value
    let headers = CLIENT_HEADERS

    const type = req.headers.get('uid')
    if (type === 'Manager') {
      body.data.type = 'Manager'
      headers = MANAGER_HEADERS
    }

    return res(
      ctx.set(headers),
      ctx.json(body)
    )
  }),

  /**
   * ユーザーログイン
   * メールアドレスが 'manager' で始まる場合、マネージャーのレスポンスを返す。それ以外はクライアントとして返す。
   * */
  rest.post(`${BASE_PATH}/api/v1/auth/sign_in`, async (req, res, ctx) => {
    const body = openapi.paths['/api/v1/auth/sign_in'].post.responses['200'].content['application/json'].examples['example-1'].value
    let headers = CLIENT_HEADERS

    const { email } = await req.json()
    if ((email as string).startsWith('manager')) {
      body.data.type = 'Manager'
      headers = MANAGER_HEADERS
    }

    return res(
      ctx.set(headers),
      ctx.json(body)
    )
  }),

  /** ログアウト */
  rest.delete(`${BASE_PATH}/api/v1/auth/sign_out`, (req, res, ctx) => {
    const body = openapi.paths['/api/v1/auth/sign_out'].delete.responses['200'].content['application/json'].examples['example-1'].value

    return res(
      ctx.json(body)
    )
  }),

  /** パスワードリセット要求 */
  rest.post(`${BASE_PATH}/api/v1/auth/password`, (req, res, ctx) => {
    const body = openapi.paths['/api/v1/auth/password'].post.responses['200'].content['application/json'].examples['example-1'].value

    return res(
      ctx.json(body)
    )
  }),

  /** パスワードリセット */
  rest.patch(`${BASE_PATH}/api/v1/auth/password`, (req, res, ctx) => {
    const body = openapi.paths['/api/v1/auth/password'].patch.responses['200'].content['application/json'].examples['example-1'].value

    return res(
      ctx.json(body)
    )
  })
]
