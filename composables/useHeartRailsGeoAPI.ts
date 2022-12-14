/** HeartRailsGeoAPIの共通URL */
const BASE_URL = 'https://geoapi.heartrails.com/api/json'

/**
 * レスポンスの共通型。{ response: }は共通で、成功時はメソッド特有の値が、失敗時はerror: stringが返ってくる
 * @example
 * //成功時
 *  { response: [ { location: { city: 札幌市北区, town: 北十条西... } } ] }
 * //失敗時
 *  { response: { error: "Cities of postal code:'1628804' do not exist." } }
 * */
type BaseResponse<T> = {
  response: {
    [K in keyof T]: T[K];
  } | {
    error: string;
  }
}

/** 八地方区分。エリア検索で使用する。 */
const AREAS = ['北海道', '東北', '関東', '中部', '近畿', '中国', '四国', '九州'] as const
export type Area = typeof AREAS[number]

/** APIから返ってくる値に共通する住所等の値 */
type AddressResult = {
  prefecture: string;
  city: string;
  city_kana: string;
  town: string;
  town_kana: string;
  x: number;
  y: number;
  postal: string;
}

/**
 * 郵便番号・住所・緯度経度データをHeartRailsGeoAPIから取得する。
 * @see http://geoapi.heartrails.com/api.html
 */
export const useHeartRailsGeoAPI = () => {
  /** 地方区分に該当する都道府県の配列を返す */
  const getPrefectures = (area: Area) => {
    switch (area) {
      case '北海道':
        return ['北海道']
      case '東北':
        return ['青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県']
      case '関東':
        return ['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県']
      case '中部':
        return ['新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県']
      case '近畿':
        return ['三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県']
      case '中国':
        return ['鳥取県', '島根県', '岡山県', '広島県', '山口県']
      case '四国':
        return ['徳島県', '香川県', '愛媛県', '高知県']
      case '九州':
        return ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県']
    }
  }

  /** 郵便番号から都道府県、市区町村、経度緯度等を取得しそれを返す。 */
  const searchByPostal = async (postal: string) => {
    type Result = { location: AddressResult[] }
    const { response } = await $fetch<BaseResponse<Result>>(`${BASE_URL}/?method=searchByPostal&postal=${postal}`)

    if ('error' in response) { throw new Error('郵便番号がヒットしませんでした') }
    return response.location[0]
  }

  /**
   * 都道府県から市区町村の配列を返す。
   * 毎回APIを叩く必要は無いため、セッションストレージにキャッシュする
   * */
  const getDistricts = async (prefecture: string) => {
    const districts = useSessionStorage<string[]>(`districts-${prefecture}`, [])
    
    // キャッシュが存在していればAPIリクエストせずに返す
    if (districts.value.length !== 0) { return districts.value }

    type Result = { location: { city: string }[] }

    const { response } = await $fetch<BaseResponse<Result>>(`${BASE_URL}/?method=getCities&prefecture=${prefecture}`)

    if ('error' in response) { throw new Error('市区町村を取得できませんでした') }

    districts.value = response.location.map(res => res.city)
    return districts.value
  }

  return {
    searchByPostal,
    AREAS,
    getPrefectures,
    getDistricts
  }
}
