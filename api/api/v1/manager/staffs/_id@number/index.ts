/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /** スタッフを削除する */
  delete: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 204
  }

  /** スタッフを更新する */
  patch: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200

    /** OK */
    resBody: {
      name: string
      furigana: string
      introduction: string
      role: string
    }

    reqBody: {
      name: string
      furigana: string
      introduction: string
      role: string
    }
  }
}
