/* eslint-disable */
export type Methods = {
  /** ECSのヘルスチェック用エンドポイント */
  get: {
    status: 200

    /** OK */
    resBody: {
      /** メッセージに意味は無し */
      message: string
    }
  }
}
