/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  /** 単一の事務所の詳細を取得する */
  get: {
    status: 200

    /** OK */
    resBody: {
      /** 事業所に関するオブジェクト */
      office: {
        /** 事業所id */
        id: number
        /** 事業所名 */
        name: string
        /** 郵便番号 */
        postal: string
        /** 住所 */
        address: string
        /** 最寄り駅及び徒歩何分 */
        nearest_station: string
        /** スタッフ数 */
        staff_count: number
        /** 電話番号 */
        tel: string
        /** FAX */
        fax: string
        /** 営業曜日 */
        workday: ('sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat')[]
        /** 営業日時についてのテキスト */
        workday_detail: string
        /** 事業所紹介タイトル */
        feature_title: string
        /** 事業所特徴 */
        feature_detail: string
        /** ブックマーク済み */
        is_bookmark: boolean
      }

      /** スタッフ一覧 */
      staffs: (Types.OfficeStaff & {
        /** ユーザーからのお礼コメント一覧 */
        user_comments: string[]
      })[]
      /** 最大5枚のカルーセル画像 */
      carousel_images: Types.OfficeImage[]
      /** 最大2枚の特徴画像。画像の特徴テキストとしてcaptionカラムが付与されている。 */
      feature_images: Types.OfficeImage[]
      office_overview: Types.OfficeOverview
    }
  }
}
