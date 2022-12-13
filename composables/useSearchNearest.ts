import type { OfficeSearchFetcher } from '@/types/offfice_search'

/**
 * - lat 緯度
 * - lng 経度
 * - page ページネーションのページ番号
 */
type NearestSearchParams = {
  lat: number
  lng: number
  page: number
}

export const useSearchNearest = () => {
  const route = useRoute()
  const { $api } = useNuxtApp()

  /** 現在地検索のurl文字列を返す */
  const buildNearestSearchUrl = ({ lat, lng, page }: NearestSearchParams) => {
    return `/offices?lat=${lat}&lng=${lng}&page=${page}`
  }

  /** 現在位置検索用のクエリパラメータを取得する */
  const getNearestSearchParams = (): NearestSearchParams => {
    const lat = Number.parseFloat(route.query.lat as string)
    const lng = Number.parseFloat(route.query.lng as string)
    const page = Number.parseFloat(route.query.page as string)

    return { lat, lng, page }
  }

  /** 現在のurlが現在位置検索の形式の場合trueを返す */
  const isCurrentUrlNearestSearch = () => {
    const params = getNearestSearchParams()
    const isAllFloat = Object.values(params).every(param => Number.isFinite(param))
    return isAllFloat
  }

  /** 現在位置検索メソッド */
  const useAsyncNearestSearch: OfficeSearchFetcher = (asyncOpts?) => {
    const { lat, lng, page } = getNearestSearchParams()

    return useAsyncData(
      `nearestSearch?lat=${lat}&lng=${lng}$page=${page}`,
      () => $api.client.api.v1.client.offices.nearest_search.$get({
        query: {
          lat,
          lng,
          page
        }
      }),
      asyncOpts
    )
  }

  return {
    buildNearestSearchUrl,
    isCurrentUrlNearestSearch,
    useAsyncNearestSearch
  }
}
