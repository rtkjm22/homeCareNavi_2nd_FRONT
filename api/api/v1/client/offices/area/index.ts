/* eslint-disable */
export type Methods = {
  /** 事業所一覧を取得する。住所で絞り込む。 */
  get: {
    query?: {
      /** addressを前方一致検索する。OR検索は半角スペースで区切る。 */
      q?: string | undefined
      /** ページネーション */
      page?: string | undefined
    } | undefined

    status: 200
  }
}
