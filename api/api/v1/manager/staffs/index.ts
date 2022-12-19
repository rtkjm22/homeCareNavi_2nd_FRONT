/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** スタッフ一覧を取得する */
  get: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200

    /** OK */
    resBody: {
      office_id: number
      name: string
      furigana: string
      introduction: string
      role: number
    }
  }

  /** スタッフを追加する */
  post: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200

    /** OK */
    resBody: {
      office_id: number
      name: string
      furigana: string
      introduction: string
      role: number
      created_at: string
      updated_at: string
    }

    reqBody: {
      name: string
      furigana: string
      introduction: string
      role: number
    }
  }
}
