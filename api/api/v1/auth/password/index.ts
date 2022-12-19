/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  /** パラメータのメールアドレスにパスワードリセットメールを送信する。 */
  post: {
    status: 200

    /** OK */
    resBody: {
      success: boolean
      message: string
    }

    reqBody: {
      /** ユーザーがメールアドレスフォームに入力した値 */
      email: string
    }
  }

  /** パスワードリセットを確定する。 */
  patch: {
    reqHeaders?: Types.Access_token & Types.Client & Types.Uid | undefined
    status: 200

    /** OK */
    resBody: {
      success: boolean
      data: Types.User
      /** 成功メッセージ */
      message: string
    }

    resHeaders: {
      'access-token': string
      uid: string
      client: string
      expiry: string
    }

    /** ヘッダーにclient,access-token,uid。ボディにpassword,password_confirmationが必須。 */
    reqBody: {
      /** 新規パスワード */
      password: string
      /** 新規パスワード確認 */
      password_confirmation: string
    }
  }
}
