import { rest } from 'msw'
import { AUTH_HEADERS, BASE_PATH } from './1.utils'
import openapi from '~/openapi.json'

export const auth = [
  /** ユーザー新規登録 */
  rest.post(`${BASE_PATH}/api/v1/auth`, (req, res, ctx) => {
    const body = openapi.paths['/api/v1/auth'].post.responses['200'].content['application/json'].examples['example-1'].value

    return res(
      ctx.set(AUTH_HEADERS),
      ctx.json(body)
    )
  }),

  /** 登録者情報更新 */
  rest.patch(`${BASE_PATH}/api/v1/auth`, (req, res, ctx) => {
    const body = openapi.paths['/api/v1/auth'].patch.responses['200'].content['application/json'].examples['example-1'].value

    return res(
      ctx.set(AUTH_HEADERS),
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

    return res(
      ctx.set(AUTH_HEADERS),
      ctx.json(body)
    )
  }),

  /** ユーザーログイン */
  rest.post(`${BASE_PATH}/api/v1/auth/sign_in`, (req, res, ctx) => {
    const body = openapi.paths['/api/v1/auth/sign_in'].post.responses['200'].content['application/json'].examples['example-1'].value

    return res(
      ctx.set(AUTH_HEADERS),
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
      ctx.set(AUTH_HEADERS),
      ctx.json(body)
    )
  })
]
