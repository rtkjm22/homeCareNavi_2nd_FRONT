/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /** 事業所一覧をエリア検索する */
  get: {
    query: {
      /** エリアの文字列。カンマで区切る。 */
      q: string
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
