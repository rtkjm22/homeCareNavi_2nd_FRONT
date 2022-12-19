import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './_id@number'
import type { Methods as Methods1 } from './area_search'
import type { Methods as Methods2 } from './nearest_search'
import type { Methods as Methods3 } from './word_search'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/client/offices'
  const PATH1 = '/api/v1/client/offices/area_search'
  const PATH2 = '/api/v1/client/offices/nearest_search'
  const PATH3 = '/api/v1/client/offices/word_search'
  const GET = 'GET'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * 単一の事務所の詳細を取得する
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 単一の事務所の詳細を取得する
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    area_search: {
      /**
       * 事業所一覧をエリア検索する
       * @returns エリア検索、現在地検索、単語検索のレスポンス
       */
      get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 事業所一覧をエリア検索する
       * @returns エリア検索、現在地検索、単語検索のレスポンス
       */
      $get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    nearest_search: {
      /**
       * 事業所一覧を取得する。現在地で絞り込む。
       * @returns エリア検索、現在地検索、単語検索のレスポンス
       */
      get: (option: { query: Methods2['get']['query'], config?: T | undefined }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * 事業所一覧を取得する。現在地で絞り込む。
       * @returns エリア検索、現在地検索、単語検索のレスポンス
       */
      $get: (option: { query: Methods2['get']['query'], config?: T | undefined }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    word_search: {
      /**
       * 事業所一覧を取得する。全文一致で絞り込む。
       * @returns エリア検索、現在地検索、単語検索のレスポンス
       */
      get: (option: { query: Methods3['get']['query'], config?: T | undefined }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * 事業所一覧を取得する。全文一致で絞り込む。
       * @returns エリア検索、現在地検索、単語検索のレスポンス
       */
      $get: (option: { query: Methods3['get']['query'], config?: T | undefined }) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods3['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
