/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** ヘッダー内のaccess-token,client,expiry,uidを検証する */
  get: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
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
  }
}
