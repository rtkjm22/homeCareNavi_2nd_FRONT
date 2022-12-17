/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** ホームケアを予約する */
  post: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200

    /** OK */
    resBody: {
      office_id: number
      client_id: number
      interview_begin_at: string
      interview_end_at: string
      user_name: string
      user_age: number
      contact_tel: string
      note: string
      is_contacted: boolean
    }

    reqBody: {
      office_id: number
      interview_begin_at: string
      interview_end_at: string
      user_name: string
      user_age: number
      contact_tel: string
      note: string
    }
  }

  /** 事業所利用者が予約一覧を取得する */
  get: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200

    /** OK */
    resBody: {
      office_id: number
      client_id: number
      interview_begin_at: string
      interview_end_at: string
      user_name: string
      user_age: number
      contact_tel: string
      note?: string | undefined
      is_contacted: boolean
    }
  }
}
