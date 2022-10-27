/** HeartRailsGeoAPIの共通URL */
const BASE_URL = 'http://geoapi.heartrails.com/api/json'

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

/** 郵便番号から都道府県、市区町村、経度緯度等を取得しそれを返す。ヒットしなければundefinedを返す。 */
const searchByPostal = async (postal: string) => {
  type Result = { location: AddressResult[] }
  const { response } = await $fetch<BaseResponse<Result>>(`${BASE_URL}/?method=searchByPostal&postal=${postal}`)

  if ('error' in response) { return }
  return response.location[0]
}

/**
 * 郵便番号・住所・緯度経度データをHeartRailsGeoAPIから取得する。
 * @see http://geoapi.heartrails.com/api.html
 */
export const useHeartRailsGeoAPI = () => {
  return {
    searchByPostal
  }
}
