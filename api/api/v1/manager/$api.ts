import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './appointment/_id@number'
import type { Methods as Methods1 } from './appointments'
import type { Methods as Methods2 } from './office/_id@number'
import type { Methods as Methods3 } from './office_client/_id@number'
import type { Methods as Methods4 } from './office_clients'
import type { Methods as Methods5 } from './staff/_id@number'
import type { Methods as Methods6 } from './staffs'
import type { Methods as Methods7 } from './thank/_id@number'
import type { Methods as Methods8 } from './thanks'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/manager/appointment'
  const PATH1 = '/api/v1/manager/appointments'
  const PATH2 = '/api/v1/manager/office'
  const PATH3 = '/api/v1/manager/office_client'
  const PATH4 = '/api/v1/manager/office_clients'
  const PATH5 = '/api/v1/manager/staff'
  const PATH6 = '/api/v1/manager/staffs'
  const PATH7 = '/api/v1/manager/thank'
  const PATH8 = '/api/v1/manager/thanks'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    appointment: {
      _id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * 予約を更新する
           */
          patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods0['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          /**
           * 予約を更新する
           */
          $patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods0['patch']['status']>(prefix, prefix1, PATCH, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    appointments: {
      /**
       * 予約一覧を取得する
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).send(),
      /**
       * 予約一覧を取得する
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    office: {
      _id: (val1: number) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          /**
           * 単一の事務所の詳細を取得する
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).send(),
          /**
           * 単一の事務所の詳細を取得する
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).send().then(r => r.body),
          /**
           * 単一の事務所を更新する
           */
          patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods2['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          /**
           * 単一の事務所を更新する
           */
          $patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods2['patch']['status']>(prefix, prefix1, PATCH, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    office_client: {
      _id: (val1: number) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          /**
           * 事業所で管理している事業所利用者一覧を更新する
           */
          patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          /**
           * 事業所で管理している事業所利用者一覧を更新する
           */
          $patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['patch']['status']>(prefix, prefix1, PATCH, option).send().then(r => r.body),
          /**
           * 事業所で管理している事業所利用者一覧を削除する
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * 事業所で管理している事業所利用者一覧を削除する
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    office_clients: {
      /**
       * 事業所で管理している事業所利用者一覧を取得する
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).send(),
      /**
       * 事業所で管理している事業所利用者一覧を取得する
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).send().then(r => r.body),
      /**
       * 事業所で管理している事業所利用者を作成する
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, PATH4, POST, option).send(),
      /**
       * 事業所で管理している事業所利用者を作成する
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, PATH4, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH4}`
    },
    staff: {
      _id: (val1: number) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          /**
           * スタッフを削除する
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * スタッフを削除する
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          /**
           * スタッフを更新する
           */
          patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          /**
           * スタッフを更新する
           */
          $patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['patch']['status']>(prefix, prefix1, PATCH, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    staffs: {
      /**
       * スタッフ一覧を取得する
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).send(),
      /**
       * スタッフ一覧を取得する
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).send().then(r => r.body),
      /**
       * スタッフを追加する
       */
      post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, PATH6, POST, option).send(),
      /**
       * スタッフを追加する
       */
      $post: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, PATH6, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH6}`
    },
    thank: {
      _id: (val1: number) => {
        const prefix1 = `${PATH7}/${val1}`

        return {
          /**
           * お礼を削除する
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * お礼を削除する
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    thanks: {
      /**
       * お礼一覧を取得する
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods8['get']['status']>(prefix, PATH8, GET, option).send(),
      /**
       * お礼一覧を取得する
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods8['get']['status']>(prefix, PATH8, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH8}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
