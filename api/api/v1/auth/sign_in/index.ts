/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** ユーザーログイン */
  post: {
    status: 200

    resBody: {
      /** successまたはerror */
      status?: string | undefined
      data: Types.User
    }

    resHeaders: {
      /** トークン認証に必要なヘッダー(1/4) */
      'access-token': string
      /** トークン認証に必要なヘッダー(2/4) */
      client: string
      /** トークン認証に必要なヘッダー(3/4) */
      expiry: string
      /** トークン認証に必要なヘッダー(4/4) */
      uid: string
    }

    reqBody: {
      /** メールアドレス */
      email: string
      /** パスワード */
      password: string
      /** ユーザーの種別 */
      type: string
    }
  }
}
