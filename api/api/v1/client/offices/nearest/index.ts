/* eslint-disable */
export type Methods = {
  /** 事業所一覧を取得する。現在地で絞り込む。 */
  get: {
    query?: {
      /** 緯度 */
      lat?: number | undefined
      /** 経度 */
      lng?: number | undefined
      /** ページネーション */
      page?: string | undefined
    } | undefined

    status: 200
  }
}
