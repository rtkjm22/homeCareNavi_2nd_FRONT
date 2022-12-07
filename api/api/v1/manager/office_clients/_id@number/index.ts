/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../../../@types'

export type Methods = {
  /** 事業所で管理している事業所利用者を更新する */
  patch: {
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

  /** 事業所で管理している事業所利用者を削除する */
  delete: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200
  }

  /** 事業所で管理している事業所利用者を取得する（現時点では編集画面で使用する用途のみ） */
  get: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200

    /** OK */
    resBody: {
      /** 主キー */
      id: number
      /** アバター画像のurl */
      avatar_url: string | null
      /** 紐付け対象のスタッフ一覧 */
      staffs: {
        /** スタッフの主キー */
        id: number
        /** スタッフの名前 */
        name: string
      }[]
    } & Types.OfficeClient
  }
}
