/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /** 事業所一覧を取得する。現在地で絞り込む。 */
  get: {
    query: {
      /** 緯度 */
      lat: number
      /** 経度 */
      lng: number
      /** 要求するページ番号。この項目が無い場合は自動的に1ページ目が返ってくる */
      page?: number | undefined
    }

    status: 200

    /** エリア検索、現在地検索、単語検索のレスポンス */
    resBody: {
      offices: Types.ResponseSearchOffice[]
      paginate: Types.Paginate
    }
  }
}
