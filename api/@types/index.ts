/* eslint-disable */
export type Access_token = {
  /** トークン認証に必要なヘッダー(1/4) */
  'access-token': string
}

export type Client = {
  /** トークン認証に必要なヘッダー(2/4) */
  client: string
}

export type Expiry = {
  /** トークン認証に必要なヘッダー(3/4) */
  expiry: string
}

export type Uid = {
  /** トークン認証に必要なヘッダー(4/4) */
  uid: string
}

/** 事業所利用者及び事業所代表者 */
export type User = {
  /** User主キー */
  id: number
  /** ユーザー名 */
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
  created_at?: string | undefined
  updated_at?: string | undefined
}

/** 事業所 */
export type Office = {
  /** Office主キー */
  id: number
  /** 事業所名 */
  name: string
  /** 特徴タイトル */
  feature_title: string
  /** 特徴詳細テキスト */
  feature_detail: string
  /** 営業曜日 */
  workday: ('sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat')[]
  /** 営業曜日についての詳細テキスト */
  workday_detail: string
  /** 緯度 */
  lat: string
  /** 経度 */
  lng: string
  /** FAX番号 */
  fax: string
  /** 最寄り駅 */
  nearest_station: string
}

/** 施設概要 */
export type OfficeOverview = {
  /** OfficeOverview主キー */
  id: number
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

/** 事業所画像 */
export type OfficeImage = {
  /** OfficeImage主キー */
  id: number
  /** 画像の見出しテキスト */
  caption?: string | undefined
  /** 画像の役割 */
  role: 'thumbnail' | 'carousel' | 'feature'
  /** 画像URL */
  image_url: string
}

/** 事業所スタッフ */
export type OfficeStaff = {
  /** OfficeStaff主キー */
  id: number
  /** スタッフ名 */
  name: string
  /** ふりがな */
  furigana: string
  /** スタッフ紹介文 */
  introduction: string
  /** スタッフロール */
  role: 'worker' | 'care_manager'
  /** 事業所スタッフの画像url */
  avatar_url?: string | null | undefined
}

/** ページネーションのレスポンス */
export type Paginate = {
  /** 現在のページ */
  current_page: number
  /** 前のページ */
  prev_page: number | null
  /** 次のページ */
  next_page: number | null
  /** 総ページ数 */
  total_page: number
  /** 対象モデルの総レコード数 */
  total_count: number
}

/** 事業所管理のクライアント */
export type OfficeClient = {
  /** 事業所利用者名 */
  name: string
  /** ふりがな */
  furigana: string
  /** 郵便番号 */
  postal: string
  /** 住所 */
  address: string
  /** 家族情報 */
  family: string
  /** 年齢 */
  age: number
}

/** 検索の事業所結果 */
export type ResponseSearchOffice = {
  /** 事業所のid */
  id: number
  /** 事業所名 */
  name: string
  /** 最寄り駅 */
  nearest_station: string
  /** 事業所に所属しているスタッフの総人数 */
  stuff_count: number
  /** 現在のユーザーがこの事務所をブックマークしているかどうか */
  is_bookmark: boolean
  /** 080-2916-9802 */
  tel: string
  /** 事業所紹介タイトル */
  feature_title: string
  /** 営業曜日 */
  workday: ('sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat')[]
  /** サムネイルのイメージ画像 */
  thumbnail_image: string | null
}

export type AuthSuccess = {
  /** successまたはerror */
  status?: string | undefined
  data: User
}

export type BadRequest = {
  /** エラーの値 */
  errors: string[]
}

export type SearchResult = {
  offices: ResponseSearchOffice[]
  paginate: Paginate
}
