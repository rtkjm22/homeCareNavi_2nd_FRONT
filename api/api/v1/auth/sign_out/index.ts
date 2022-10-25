/* eslint-disable */
export type Methods = {
  /** ヘッダーに`access-token`,`uid`,`client`必須。ログアウトする。 */
  delete: {
    status: 200

    /** OK */
    resBody: {
      /** 成功判定 */
      success: boolean
    }
  }
}
