/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../../../../../@types'

export type Methods = {
  /** Manager自身の事業所画像を更新する */
  patch: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Expiry & Types.Uid | undefined
    status: 200
    /** OK */
    resBody: Types.OfficeImage
    reqFormat: FormData

    /** ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること */
    reqBody: {
      /** 画像のバイナリデータ */
      image: (File | ReadStream)
      /** キャプション */
      caption?: string | undefined
      /** 役割。thumbnailが一覧のサムネイル。carouselが5枚のカルーセル。featureが2枚の説明画像 */
      role: 'thumbnail' | 'carousel' | 'feature'
    }
  }
}
