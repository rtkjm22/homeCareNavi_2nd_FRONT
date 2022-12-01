/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** ヘッダーに`access-token`,`uid`,`client`必須。ログアウトする。 */
  delete: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200

    /** OK */
    resBody: {
      /** 成功判定 */
      success: boolean
    }
  }
}
