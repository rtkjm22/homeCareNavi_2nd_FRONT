import { rest, RestRequest } from 'msw'
import { BASE_PATH } from './utils'
import openapi from '~/openapi.json'


/** totalCount件の事業所を含む検索結果を返す */
export const buildSearchResponse = (req: RestRequest, totalCount?: number) => {
  totalCount ||= 125 // 引数にtotalCountを渡されなければ,初期値125とする

  // ページネーションレスポンス作成
  const paginate = openapi.components.schemas.Paginate['x-examples']['Example 1']

  paginate.current_page = Number.parseInt(req.url.searchParams.get('page')!)
  paginate.total_count = totalCount


  // 事業所レスポンス作成
  const searchOffice = openapi.components.schemas.ResponseSearchOffice['x-examples']['Example 1']
  searchOffice.thumbnail_image = 'https://placehold.jp/595fd4/9cbfff/120x90.png'

  // 現在の表示より後に存在する事業所数。総事業所数から既に閲覧済みの事業所数を引いた値。
  // 例: totalCount = 69 current_page = 7 の場合は 9（60件閲覧済み、未閲覧9）
  //     totalCount = 100 current_page = 5 の場合は 60（40件閲覧済み、未閲覧60）
  const currentTotalCount = totalCount - (paginate.current_page - 1) * 10

  // 画面に表示する事業所数。事業所数が10以上なら10,10より下ならその値
  const displayPerPage = Math.min(currentTotalCount, 10)

  const offices = []

  for (let i = 0; i < displayPerPage; i++) {
    offices.push(searchOffice)
  }

  return {
    offices,
    paginate
  }
}

export const officeSearch = [
  /** エリア検索 */
  rest.get(`${BASE_PATH}/api/v1/client/offices/area_search`, (req, res, ctx) => {
    const body = buildSearchResponse(req)
  
    return res(
      ctx.json(body)
    )
  }),

  /** 単語検索 */
  rest.get(`${BASE_PATH}/api/v1/client/offices/word_search`, (req, res, ctx) => {
    const body = buildSearchResponse(req)

    return res(
      ctx.json(body)
    )
  }),

  /** 現在地検索 */
  rest.get(`${BASE_PATH}/api/v1/client/offices/nearest_search`, (req, res, ctx) => {
    const body = buildSearchResponse(req)

    return res(
      ctx.json(body)
    )
  }),

  /** 事業所詳細取得 */
  rest.get(`${BASE_PATH}/api/v1/client/offices/:id`, (req, res, cts) => {
    const body = openapi.paths['/api/v1/client/offices/{id}'].get.responses[200].content['application/json'].examples['Example 1'].value

    return res(
      cts.json(body)
    )
  })
]
