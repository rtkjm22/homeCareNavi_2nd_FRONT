/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** Manager自身の施設概要を更新する */
  patch: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200
    /** OK */
    resBody: Types.OfficeOverview

    reqBody: {
      /** 類型 */
      classify: string
      /** 開設年月 */
      opening_date: string
      /** 居室数 */
      room_count: number
      /** 入居時の要件 */
      requirements: string
      /** 共用設備 */
      shared_facilities: string
      /** 経営・事業主体 */
      business_entity: string
      /** 公式サイトのURL */
      official_site_url: string
    }
  }

  /** Manager自身の施設概要を取得する */
  get: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200
    /** OK */
    resBody: Types.OfficeOverview

    resHeaders: {
    }
  }
}
