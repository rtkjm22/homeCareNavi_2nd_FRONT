import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './appointments'
import type { Methods as Methods1 } from './book_mark/_id@number'
import type { Methods as Methods2 } from './bookmarks'
import type { Methods as Methods3 } from './histories'
import type { Methods as Methods4 } from './office/_id@number'
import type { Methods as Methods5 } from './offices/area'
import type { Methods as Methods6 } from './offices/nearest'
import type { Methods as Methods7 } from './offices/search'
import type { Methods as Methods8 } from './thank/_id@number'
import type { Methods as Methods9 } from './thanks'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/client/appointments'
  const PATH1 = '/api/v1/client/book_mark'
  const PATH2 = '/api/v1/client/bookmarks'
  const PATH3 = '/api/v1/client/histories'
  const PATH4 = '/api/v1/client/office'
  const PATH5 = '/api/v1/client/offices/area'
  const PATH6 = '/api/v1/client/offices/nearest'
  const PATH7 = '/api/v1/client/offices/search'
  const PATH8 = '/api/v1/client/thank'
  const PATH9 = '/api/v1/client/thanks'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    appointments: {
      /**
       * ホームケアを予約する
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send(),
      /**
       * ホームケアを予約する
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
      /**
       * 予約一覧を取得する
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).send(),
      /**
       * 予約一覧を取得する
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    book_mark: {
      _id: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * ブックマークを削除する
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * ブックマークを削除する
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    bookmarks: {
      /**
       * ブックマークをつけた事業所一覧を取得する
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).send(),
      /**
       * ブックマークをつけた事業所一覧を取得する
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).send().then(r => r.body),
      /**
       * ブックマークを作成する
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).send(),
      /**
       * ブックマークを作成する
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    histories: {
      /**
       * 事業所の閲覧履歴を取得する
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).send(),
      /**
       * 事業所の閲覧履歴を取得する
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    office: {
      _id: (val1: number) => {
        const prefix1 = `${PATH4}/${val1}`

        return {
          /**
           * 単一の事務所の詳細を取得する
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).send(),
          /**
           * 単一の事務所の詳細を取得する
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, prefix1, GET, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    offices: {
      area: {
        /**
         * 事業所一覧を取得する。住所で絞り込む。
         */
        get: (option?: { query?: Methods5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).send(),
        /**
         * 事業所一覧を取得する。住所で絞り込む。
         */
        $get: (option?: { query?: Methods5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods5['get']['query'] } | undefined) =>
          `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      nearest: {
        /**
         * 事業所一覧を取得する。現在地で絞り込む。
         */
        get: (option?: { query?: Methods6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).send(),
        /**
         * 事業所一覧を取得する。現在地で絞り込む。
         */
        $get: (option?: { query?: Methods6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods6['get']['query'] } | undefined) =>
          `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      search: {
        /**
         * 事業所一覧を取得する。全文一致で絞り込む。
         */
        get: (option?: { query?: Methods7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).send(),
        /**
         * 事業所一覧を取得する。全文一致で絞り込む。
         */
        $get: (option?: { query?: Methods7['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).send().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods7['get']['query'] } | undefined) =>
          `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
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
