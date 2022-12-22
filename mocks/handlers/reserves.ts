import { rest } from 'msw'
import { BASE_PATH } from './utils'
import openapi from '~/openapi.json'

export const reserves = [
  /** 予約一覧取得(マネージャー) */
  rest.get(`${BASE_PATH}/api/v1/manager/reserves`, (req, res, ctx) => {
    const body = openapi.paths['/api/v1/manager/reserves'].get.responses[200].content['application/json'].examples['Example 1'].value

    return res(
      ctx.json(body)
    )
  }),

  /** 予約を連絡済みに更新(マネージャー) */
  rest.patch(`${BASE_PATH}/api/v1/manager/reserves/:id`, (req, res, ctx) => {
    const body = openapi.paths['/api/v1/manager/reserves/{id}'].patch.responses[200].content['application/json'].examples['Example 1']

    return res(
      ctx.json(body)
    )
  }),

  /** 予約作成(クライアント) */
  rest.post(`${BASE_PATH}/api/v1/client/reserves`, (req, res, ctx) => {
    const body = openapi.paths['/api/v1/client/reserves'].post.responses[200].content['application/json'].examples['Example 1']

    return res(
      ctx.json(body)
    )
  })
]
