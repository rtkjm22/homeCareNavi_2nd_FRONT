import type { Ref } from 'vue'
import type { AsyncDataOptions } from '#app'

/** エリア検索に必須なクエリパラメータ */
type AreaSearchParams = {
  areas: string;
  page: number;
  prefecture: string;
  area: string;
}

export const useAreaSearch = () => {
  const { $api } = useNuxtApp()
  const route = useRoute()

  /**
   * エリア検索のカンマ区切り市区町村文字列を返す
     @example
      buildAreasString({
        prefecture: "東京都",
        districts: ["渋谷区宇田川町","新宿区市谷本村町"]
      })
      // => "東京都渋谷区宇田川町,東京都新宿区市谷本村町"
   * */
  const buildAreasString = ({ prefecture, districts }: { prefecture: string, districts: string[] }) => {
    const prefectureAndDistricts = districts.map((district) => {
      return prefecture + district
    })
  
    return prefectureAndDistricts.join()
  }

  /** prefectureページのUrlを返す */
  const buildPrefecturePageUrl = ({ area }: { area: string }) => {
    return `/prefecture?area=${area}`
  }

  /** districtページのUrlを返す */
  const buildDistrictPageUrl = ({ area, prefecture }: { area: string; prefecture: string }) => {
    return `/district?area=${area}&prefecture=${prefecture}`
  }

  /** エリア検索のurl文字列を返す */
  const buildAreaSearchUrl = ({ areas, page, prefecture, area }: AreaSearchParams) => {
    return `/offices?areas=${areas}&page=${page}&prefecture=${prefecture}&area=${area}`
  }

  /** エリア検索用のクエリパラメータを取得する */
  const getAreaSearchParams = (): AreaSearchParams & { districts?: string[] } => {
    const areas = route.query.areas as string
    const page = Number.parseInt(route.query.page as string)
    const prefecture = route.query.prefecture as string
    const area = route.query.area as string
    let districts: string[] | undefined

    if (typeof areas === 'string' && typeof prefecture === 'string') {
      // カンマ区切り文字列から市区町村のみ抽出する
      // 例："東京都渋谷区宇田川町,東京都新宿区市谷本村町" #=> ["渋谷区宇田川町","新宿区市谷本村町"]
      districts = areas.split(',').map(area => area.slice(prefecture.length))
    }
    return { areas, page, prefecture, districts, area }
  }

  /** エリア検索実行メソッド */
  const useAsyncAreaSearch = (areas: string, page: Ref<number>, asyncOpts?: AsyncDataOptions<any>) => {
    return useAsyncData(
      `areaSearch?areas=${areas}&page=${page}`,
      () => $api.client.api.v1.client.offices.area_search.$get({
        query: {
          areas,
          page: page.value
        }
      }),
      asyncOpts
    )
  }

  return {
    buildAreasString,
    buildDistrictPageUrl,
    buildPrefecturePageUrl,
    buildAreaSearchUrl,
    getAreaSearchParams,
    useAsyncAreaSearch
  }
}
