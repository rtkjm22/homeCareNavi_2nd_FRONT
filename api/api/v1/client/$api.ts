import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './book_mark/_id@number'
import type { Methods as Methods1 } from './bookmarks'
import type { Methods as Methods2 } from './histories'
import type { Methods as Methods3 } from './offices/_id@number'
import type { Methods as Methods4 } from './offices/area_search'
import type { Methods as Methods5 } from './offices/nearest_search'
import type { Methods as Methods6 } from './offices/word_search'
import type { Methods as Methods7 } from './reserves'
import type { Methods as Methods8 } from './thank/_id@number'
import type { Methods as Methods9 } from './thanks'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/client/book_mark'
  const PATH1 = '/api/v1/client/bookmarks'
  const PATH2 = '/api/v1/client/histories'
  const PATH3 = '/api/v1/client/offices'
  const PATH4 = '/api/v1/client/offices/area_search'
  const PATH5 = '/api/v1/client/offices/nearest_search'
  const PATH6 = '/api/v1/client/offices/word_search'
  const PATH7 = '/api/v1/client/reserves'
  const PATH8 = '/api/v1/client/thank'
  const PATH9 = '/api/v1/client/thanks'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    book_mark: {
      _id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * ブックマークを削除する
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * ブックマークを削除する
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    bookmarks: {
      /**
       * ブックマークをつけた事業所一覧を取得する
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).send(),
      /**
       * ブックマークをつけた事業所一覧を取得する
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).send().then(r => r.body),
      /**
       * ブックマークを作成する
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).send(),
      /**
       * ブックマークを作成する
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    histories: {
      /**
       * 事業所の閲覧履歴を取得する
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).send(),
      /**
       * 事業所の閲覧履歴を取得する
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    offices: {
      _id: (val1: number) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          /**
           * 単一の事務所の詳細を取得する
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 単一の事務所の詳細を取得する
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      area_search: {
        /**
         * 事業所一覧をエリア検索する
         * @returns エリア検索、現在地検索、単語検索のレスポンス
         */
        get: (option: { query: Methods4['get']['query'], config?: T | undefined }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).json(),
        /**
         * 事業所一覧をエリア検索する
         * @returns エリア検索、現在地検索、単語検索のレスポンス
         */
        $get: (option: { query: Methods4['get']['query'], config?: T | undefined }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods4['get']['query'] } | undefined) =>
          `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      nearest_search: {
        /**
         * 事業所一覧を取得する。現在地で絞り込む。
         * @returns エリア検索、現在地検索、単語検索のレスポンス
         */
        get: (option: { query: Methods5['get']['query'], config?: T | undefined }) =>
          fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json(),
        /**
         * 事業所一覧を取得する。現在地で絞り込む。
         * @returns エリア検索、現在地検索、単語検索のレスポンス
         */
        $get: (option: { query: Methods5['get']['query'], config?: T | undefined }) =>
          fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods5['get']['query'] } | undefined) =>
          `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      word_search: {
        /**
         * 事業所一覧を取得する。全文一致で絞り込む。
         * @returns エリア検索、現在地検索、単語検索のレスポンス
         */
        get: (option: { query: Methods6['get']['query'], config?: T | undefined }) =>
          fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).json(),
        /**
         * 事業所一覧を取得する。全文一致で絞り込む。
         * @returns エリア検索、現在地検索、単語検索のレスポンス
         */
        $get: (option: { query: Methods6['get']['query'], config?: T | undefined }) =>
          fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods6['get']['query'] } | undefined) =>
          `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    reserves: {
      /**
       * ホームケアを予約する
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods7['post']['status']>(prefix, PATH7, POST, option).send(),
      /**
       * ホームケアを予約する
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods7['post']['status']>(prefix, PATH7, POST, option).send().then(r => r.body),
      /**
       * 予約一覧を取得する
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).send(),
      /**
       * 予約一覧を取得する
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH7}`
    },
    thank: {
      _id: (val1: number) => {
        const prefix1 = `${PATH8}/${val1}`

        return {
          /**
           * お礼を削除する
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * お礼を削除する
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          /**
           * お礼を更新する
           */
          patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          /**
           * お礼を更新する
           */
          $patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8['patch']['status']>(prefix, prefix1, PATCH, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    thanks: {
      /**
       * お礼を投稿する
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods9['post']['status']>(prefix, PATH9, POST, option).send(),
      /**
       * お礼を投稿する
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods9['post']['status']>(prefix, PATH9, POST, option).send().then(r => r.body),
      /**
       * お礼一覧を取得する
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods9['get']['status']>(prefix, PATH9, GET, option).send(),
      /**
       * お礼一覧を取得する
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods9['get']['status']>(prefix, PATH9, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH9}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
