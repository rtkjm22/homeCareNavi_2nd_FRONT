/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /** 予約を更新する */
  patch: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200

    /** OK */
    resBody: {
      is_contacted: number
    }

    reqBody: {
      ' id': number
      is_contacted?: boolean | undefined
    }
  }
}
