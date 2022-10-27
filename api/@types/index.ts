/* eslint-disable */
/** 事業所利用者及び事業所代表者 */
export type User = {
  /** ID */
  id: number
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
  /** STIによるユーザー識別文字列 */
  type: string
  /** emailやOmniauth等の認証方式 */
  provider: string
  /** ユーザー識別子 */
  uid: string
  /** パスワード変更中判定 */
  allow_password_change: boolean
  /** 作成日時(新規作成時のみ返ってくる) */
  created_at?: string | undefined
  /** 更新日時(新規作成時のみ返ってくる) */
  updated_at?: string | undefined
}
