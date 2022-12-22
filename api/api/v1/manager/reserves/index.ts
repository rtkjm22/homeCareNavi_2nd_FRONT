/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** 予約一覧を取得する */
  get: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200
    /** OK */
    resBody: Types.Reserve[]
  }
}
