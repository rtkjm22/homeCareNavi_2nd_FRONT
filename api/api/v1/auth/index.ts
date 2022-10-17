/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** ユーザーを新規登録する。typeの値によって、ユーザーの種別(事務所利用者等)が決定する。 */
  post: {
    status: 200

    resBody: {
      /** successまたはerror */
      status?: string | undefined
      data: Types.User
    }

    resHeaders: {
      /** トークン認証に必要なヘッダー(1/4) */
      'access-token': string
      /** トークン認証に必要なヘッダー(2/4) */
      client: string
      /** トークン認証に必要なヘッダー(3/4) */
      expiry: string
      /** トークン認証に必要なヘッダー(4/4) */
      uid: string
    }

    reqBody: {
      /** 名前 */
      name: string
      /** メールアドレス */
      email: string
      /** 電話番号 */
      tel: string
      /** 郵便番号 */
      postal: string
      /** 住所 */
      address: string
      /** パスワード */
      password: string
      /** STIによるユーザー識別文字列 */
      type: string
      /** アカウント登録メールに記載されるURL。clientならトップページ、managerならスタッフ情報ページのURLとする。 */
      confirm_success_url: string
    }
  }

  /** 登録者情報を更新する */
  patch: {
    status: 200

    resBody: {
      /** successまたはerror */
      status?: string | undefined
      data: Types.User
    }

    resHeaders: {
      /** トークン認証に必要なヘッダー(1/4) */
      'access-token': string
      /** トークン認証に必要なヘッダー(2/4) */
      client: string
      /** トークン認証に必要なヘッダー(3/4) */
      expiry: string
      /** トークン認証に必要なヘッダー(4/4) */
      uid: string
    }

    reqBody: {
      name: string
      email: string
      tel: string
      postal: string
      address: string
      current_password: string
      password?: string | undefined
      password_confirmation?: string | undefined
    }
  }

  /** 退会する */
  delete: {
    status: 200

    /** OK */
    resBody: {
      /** ステータス */
      status: string
      /** メッセージ */
      message: string
    }
  }
}
