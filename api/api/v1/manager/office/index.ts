/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** Manager自身の事務所詳細を取得する */
  get: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200

    /** OK */
    resBody: Types.Office & {
      thumbnail_image: Types.OfficeImage
      feature_images: Types.OfficeImage[]
      carousel_images: Types.OfficeImage[]
    }
  }

  /** Manager自身の事務所を更新する */
  patch: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200
    /** OK */
    resBody: Types.Office

    reqBody: {
      /** 新事業所名 */
      name: string
      /** 新事業所タイトル */
      feature_title: string
      /** 新事業所詳細 */
      feature_detail: string
      /** 新事業所営業曜日 */
      workday: ('sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat')[]
      /** 新営業日テキスト */
      workday_detail: string
      /** 新FAX番号 */
      fax: string
    }
  }
}
