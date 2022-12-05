/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../../@types'

export type Methods = {
  /** 事業所で管理している事業所利用者一覧を取得する */
  get: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200

    /** OK */
    resBody: {
      office_clients: ({
        /** 利用者の主キー */
        id: number
        /** 担当スタッフ名 */
        staff_name: string
        /** アバター画像のurl */
        avatar_url: string | null
      } & Types.OfficeClient)[]
    }
  }

  /** 事業所で管理している事業所利用者を作成する */
  post: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200
    reqFormat: FormData

    /** ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること */
    reqBody: Types.OfficeClient & {
      /** 画像のバイナリデータ */
      avatar: (File | ReadStream)
      /** 担当スタッフのid */
      staff_id: number
    }
  }
}
