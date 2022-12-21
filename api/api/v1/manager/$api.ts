import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './office'
import type { Methods as Methods1 } from './office_clients'
import type { Methods as Methods2 } from './office_clients/_id@number'
import type { Methods as Methods3 } from './office_images'
import type { Methods as Methods4 } from './office_images/_id@number'
import type { Methods as Methods5 } from './office_overview'
import type { Methods as Methods6 } from './reserve/_id@number'
import type { Methods as Methods7 } from './reserves'
import type { Methods as Methods8 } from './staffs'
import type { Methods as Methods9 } from './staffs/_id@number'
import type { Methods as Methods10 } from './thank/_id@number'
import type { Methods as Methods11 } from './thanks'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/manager/office'
  const PATH1 = '/api/v1/manager/office_clients'
  const PATH2 = '/api/v1/manager/office_images'
  const PATH3 = '/api/v1/manager/office_overview'
  const PATH4 = '/api/v1/manager/reserve'
  const PATH5 = '/api/v1/manager/reserves'
  const PATH6 = '/api/v1/manager/staffs'
  const PATH7 = '/api/v1/manager/thank'
  const PATH8 = '/api/v1/manager/thanks'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    office: {
      /**
       * Manager自身の事務所詳細を取得する
       * @returns OK
       */
      get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * Manager自身の事務所詳細を取得する
       * @returns OK
       */
      $get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      /**
       * Manager自身の事務所を更新する
       * @returns OK
       */
      patch: (option: { body: Methods0['patch']['reqBody'], headers?: Methods0['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, PATH0, PATCH, option).json(),
      /**
       * Manager自身の事務所を更新する
       * @returns OK
       */
      $patch: (option: { body: Methods0['patch']['reqBody'], headers?: Methods0['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, PATH0, PATCH, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    office_clients: {
      _id: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * 事業所で管理している事業所利用者を更新する
           * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
           */
          patch: (option: { body: Methods2['patch']['reqBody'], headers?: Methods2['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['patch']['status']>(prefix, prefix1, PATCH, option, 'FormData').send(),
          /**
           * 事業所で管理している事業所利用者を更新する
           * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
           */
          $patch: (option: { body: Methods2['patch']['reqBody'], headers?: Methods2['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['patch']['status']>(prefix, prefix1, PATCH, option, 'FormData').send().then(r => r.body),
          /**
           * 事業所で管理している事業所利用者を削除する
           */
          delete: (option?: { headers?: Methods2['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * 事業所で管理している事業所利用者を削除する
           */
          $delete: (option?: { headers?: Methods2['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          /**
           * 事業所で管理している事業所利用者を取得する（現時点では編集画面で使用する用途のみ）
           * @returns OK
           */
          get: (option?: { headers?: Methods2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 事業所で管理している事業所利用者を取得する（現時点では編集画面で使用する用途のみ）
           * @returns OK
           */
          $get: (option?: { headers?: Methods2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * 事業所で管理している事業所利用者一覧を取得する
       * @returns OK
       */
      get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 事業所で管理している事業所利用者一覧を取得する
       * @returns OK
       */
      $get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * 事業所で管理している事業所利用者を作成する
       * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
       */
      post: (option: { body: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option, 'FormData').send(),
      /**
       * 事業所で管理している事業所利用者を作成する
       * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
       */
      $post: (option: { body: Methods1['post']['reqBody'], headers?: Methods1['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option, 'FormData').send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    office_images: {
      _id: (val1: number) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          /**
           * Manager自身の事業所画像を更新する
           * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
           * @returns OK
           */
          patch: (option: { body: Methods4['patch']['reqBody'], headers?: Methods4['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods4['patch']['resBody'], BasicHeaders, Methods4['patch']['status']>(prefix, prefix1, PATCH, option, 'FormData').json(),
          /**
           * Manager自身の事業所画像を更新する
           * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
           * @returns OK
           */
          $patch: (option: { body: Methods4['patch']['reqBody'], headers?: Methods4['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods4['patch']['resBody'], BasicHeaders, Methods4['patch']['status']>(prefix, prefix1, PATCH, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * Manager自身の事業所画像を作成する
       * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
       * @returns OK
       */
      post: (option: { body: Methods3['post']['reqBody'], headers?: Methods3['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH2, POST, option, 'FormData').json(),
      /**
       * Manager自身の事業所画像を作成する
       * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
       * @returns OK
       */
      $post: (option: { body: Methods3['post']['reqBody'], headers?: Methods3['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH2, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    office_overview: {
      /**
       * Manager自身の施設概要を更新する
       * @returns OK
       */
      patch: (option: { body: Methods5['patch']['reqBody'], headers?: Methods5['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods5['patch']['resBody'], BasicHeaders, Methods5['patch']['status']>(prefix, PATH3, PATCH, option).json(),
      /**
       * Manager自身の施設概要を更新する
       * @returns OK
       */
      $patch: (option: { body: Methods5['patch']['reqBody'], headers?: Methods5['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods5['patch']['resBody'], BasicHeaders, Methods5['patch']['status']>(prefix, PATH3, PATCH, option).json().then(r => r.body),
      /**
       * Manager自身の施設概要を取得する
       * @returns OK
       */
      get: (option?: { headers?: Methods5['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], Methods5['get']['resHeaders'], Methods5['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * Manager自身の施設概要を取得する
       * @returns OK
       */
      $get: (option?: { headers?: Methods5['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], Methods5['get']['resHeaders'], Methods5['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    reserve: {
      _id: (val1: number) => {
        const prefix1 = `${PATH4}/${val1}`

        return {
          /**
           * 予約を更新する
           * @returns OK
           */
          patch: (option: { body: Methods6['patch']['reqBody'], headers?: Methods6['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods6['patch']['resBody'], BasicHeaders, Methods6['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * 予約を更新する
           * @returns OK
           */
          $patch: (option: { body: Methods6['patch']['reqBody'], headers?: Methods6['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods6['patch']['resBody'], BasicHeaders, Methods6['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    reserves: {
      /**
       * 予約一覧を取得する
       * @returns OK
       */
      get: (option?: { headers?: Methods7['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * 予約一覧を取得する
       * @returns OK
       */
      $get: (option?: { headers?: Methods7['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH5}`
    },
    staffs: {
      _id: (val1: number) => {
        const prefix1 = `${PATH6}/${val1}`

        return {
          /**
           * スタッフを削除する
           */
          delete: (option?: { headers?: Methods9['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods9['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * スタッフを削除する
           */
          $delete: (option?: { headers?: Methods9['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods9['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          /**
           * スタッフを更新する
           * @returns OK
           */
          patch: (option: { body: Methods9['patch']['reqBody'], headers?: Methods9['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods9['patch']['resBody'], BasicHeaders, Methods9['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * スタッフを更新する
           * @returns OK
           */
          $patch: (option: { body: Methods9['patch']['reqBody'], headers?: Methods9['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods9['patch']['resBody'], BasicHeaders, Methods9['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * スタッフ一覧を取得する
       * @returns OK
       */
      get: (option?: { headers?: Methods8['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * スタッフ一覧を取得する
       * @returns OK
       */
      $get: (option?: { headers?: Methods8['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      /**
       * スタッフを追加する
       * @returns OK
       */
      post: (option: { body: Methods8['post']['reqBody'], headers?: Methods8['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH6, POST, option).json(),
      /**
       * スタッフを追加する
       * @returns OK
       */
      $post: (option: { body: Methods8['post']['reqBody'], headers?: Methods8['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
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
            fetch<void, BasicHeaders, Methods10['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * お礼を削除する
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods10['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    thanks: {
      /**
       * お礼一覧を取得する
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods11['get']['status']>(prefix, PATH8, GET, option).send(),
      /**
       * お礼一覧を取得する
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods11['get']['status']>(prefix, PATH8, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH8}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
