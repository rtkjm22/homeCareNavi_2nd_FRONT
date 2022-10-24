import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './v1/auth'
import type { Methods as Methods1 } from './v1/auth/password'
import type { Methods as Methods2 } from './v1/auth/sign_in'
import type { Methods as Methods3 } from './v1/auth/sign_out'
import type { Methods as Methods4 } from './v1/auth/validate_token'
import type { Methods as Methods5 } from './v1/client/appointments'
import type { Methods as Methods6 } from './v1/client/book_mark/_id@number'
import type { Methods as Methods7 } from './v1/client/bookmarks'
import type { Methods as Methods8 } from './v1/client/histories'
import type { Methods as Methods9 } from './v1/client/office/_id@number'
import type { Methods as Methods10 } from './v1/client/offices'
import type { Methods as Methods11 } from './v1/client/staffs'
import type { Methods as Methods12 } from './v1/client/thank/_id@number'
import type { Methods as Methods13 } from './v1/client/thanks'
import type { Methods as Methods14 } from './v1/manager/appointment/_id@number'
import type { Methods as Methods15 } from './v1/manager/appointments'
import type { Methods as Methods16 } from './v1/manager/office/_id@number'
import type { Methods as Methods17 } from './v1/manager/office_client/_id@number'
import type { Methods as Methods18 } from './v1/manager/office_clients'
import type { Methods as Methods19 } from './v1/manager/staff/_id@number'
import type { Methods as Methods20 } from './v1/manager/staffs'
import type { Methods as Methods21 } from './v1/manager/thank/_id@number'
import type { Methods as Methods22 } from './v1/manager/thanks'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/auth'
  const PATH1 = '/api/v1/auth/password'
  const PATH2 = '/api/v1/auth/sign_in'
  const PATH3 = '/api/v1/auth/sign_out'
  const PATH4 = '/api/v1/auth/validate_token'
  const PATH5 = '/api/v1/client/appointments'
  const PATH6 = '/api/v1/client/book_mark'
  const PATH7 = '/api/v1/client/bookmarks'
  const PATH8 = '/api/v1/client/histories'
  const PATH9 = '/api/v1/client/office'
  const PATH10 = '/api/v1/client/offices'
  const PATH11 = '/api/v1/client/staffs'
  const PATH12 = '/api/v1/client/thank'
  const PATH13 = '/api/v1/client/thanks'
  const PATH14 = '/api/v1/manager/appointment'
  const PATH15 = '/api/v1/manager/appointments'
  const PATH16 = '/api/v1/manager/office'
  const PATH17 = '/api/v1/manager/office_client'
  const PATH18 = '/api/v1/manager/office_clients'
  const PATH19 = '/api/v1/manager/staff'
  const PATH20 = '/api/v1/manager/staffs'
  const PATH21 = '/api/v1/manager/thank'
  const PATH22 = '/api/v1/manager/thanks'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    v1: {
      auth: {
        password: {
          /**
           * パラメータのメールアドレスにパスワードリセットメールを送信する。
           * @returns OK
           */
          post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
          /**
           * パラメータのメールアドレスにパスワードリセットメールを送信する。
           * @returns OK
           */
          $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
          /**
           * パスワードリセットを確定する。
           * @param option.body - ヘッダーにclient,access-token,uid。ボディにpassword,password_confirmationが必須。
           * @returns OK
           */
          patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['patch']['resBody'], Methods1['patch']['resHeaders'], Methods1['patch']['status']>(prefix, PATH1, PATCH, option).json(),
          /**
           * パスワードリセットを確定する。
           * @param option.body - ヘッダーにclient,access-token,uid。ボディにpassword,password_confirmationが必須。
           * @returns OK
           */
          $patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['patch']['resBody'], Methods1['patch']['resHeaders'], Methods1['patch']['status']>(prefix, PATH1, PATCH, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH1}`
        },
        sign_in: {
          /**
           * ユーザーログイン
           */
          post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], Methods2['post']['resHeaders'], Methods2['post']['status']>(prefix, PATH2, POST, option).json(),
          /**
           * ユーザーログイン
           */
          $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], Methods2['post']['resHeaders'], Methods2['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH2}`
        },
        sign_out: {
          /**
           * ヘッダーに`access-token`,`uid`,`client`必須。ログアウトする。
           * @returns OK
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, PATH3, DELETE, option).json(),
          /**
           * ヘッダーに`access-token`,`uid`,`client`必須。ログアウトする。
           * @returns OK
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, PATH3, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH3}`
        },
        validate_token: {
          /**
           * ヘッダー内のaccess-token,client,expiry,uidを検証する
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], Methods4['get']['resHeaders'], Methods4['get']['status']>(prefix, PATH4, GET, option).json(),
          /**
           * ヘッダー内のaccess-token,client,expiry,uidを検証する
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], Methods4['get']['resHeaders'], Methods4['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH4}`
        },
        /**
         * ユーザーを新規登録する。typeの値によって、ユーザーの種別(事務所利用者等)が決定する。
         */
        post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods0['post']['resBody'], Methods0['post']['resHeaders'], Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
        /**
         * ユーザーを新規登録する。typeの値によって、ユーザーの種別(事務所利用者等)が決定する。
         */
        $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods0['post']['resBody'], Methods0['post']['resHeaders'], Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
        /**
         * 登録者情報を更新する
         */
        patch: (option: { body: Methods0['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods0['patch']['resBody'], Methods0['patch']['resHeaders'], Methods0['patch']['status']>(prefix, PATH0, PATCH, option).json(),
        /**
         * 登録者情報を更新する
         */
        $patch: (option: { body: Methods0['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods0['patch']['resBody'], Methods0['patch']['resHeaders'], Methods0['patch']['status']>(prefix, PATH0, PATCH, option).json().then(r => r.body),
        /**
         * 退会する
         * @returns OK
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json(),
        /**
         * 退会する
         * @returns OK
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      },
      client: {
        appointments: {
          /**
           * ホームケアを予約する
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, PATH5, POST, option).send(),
          /**
           * ホームケアを予約する
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, PATH5, POST, option).send().then(r => r.body),
          /**
           * 予約一覧を取得する
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).send(),
          /**
           * 予約一覧を取得する
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['get']['status']>(prefix, PATH5, GET, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH5}`
        },
        book_mark: {
          _id: (val3: number) => {
            const prefix3 = `${PATH6}/${val3}`

            return {
              /**
               * ブックマークを削除する
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              /**
               * ブックマークを削除する
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          }
        },
        bookmarks: {
          /**
           * ブックマークをつけた事業所一覧を取得する
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).send(),
          /**
           * ブックマークをつけた事業所一覧を取得する
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).send().then(r => r.body),
          /**
           * ブックマークを作成する
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods7['post']['status']>(prefix, PATH7, POST, option).send(),
          /**
           * ブックマークを作成する
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods7['post']['status']>(prefix, PATH7, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH7}`
        },
        histories: {
          /**
           * 事業所の閲覧履歴を取得する
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8['get']['status']>(prefix, PATH8, GET, option).send(),
          /**
           * 事業所の閲覧履歴を取得する
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8['get']['status']>(prefix, PATH8, GET, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH8}`
        },
        office: {
          _id: (val3: number) => {
            const prefix3 = `${PATH9}/${val3}`

            return {
              /**
               * 単一の事務所の詳細を取得する
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods9['get']['status']>(prefix, prefix3, GET, option).send(),
              /**
               * 単一の事務所の詳細を取得する
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods9['get']['status']>(prefix, prefix3, GET, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          }
        },
        offices: {
          /**
           * 事業所一覧を取得する。
           */
          get: (option?: { query?: Methods10['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods10['get']['status']>(prefix, PATH10, GET, option).send(),
          /**
           * 事業所一覧を取得する。
           */
          $get: (option?: { query?: Methods10['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods10['get']['status']>(prefix, PATH10, GET, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods10['get']['query'] } | undefined) =>
            `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        staffs: {
          /**
           * スタッフ一覧を取得する
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods11['get']['status']>(prefix, PATH11, GET, option).send(),
          /**
           * スタッフ一覧を取得する
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods11['get']['status']>(prefix, PATH11, GET, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH11}`
        },
        thank: {
          _id: (val3: number) => {
            const prefix3 = `${PATH12}/${val3}`

            return {
              /**
               * お礼を削除する
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods12['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              /**
               * お礼を削除する
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods12['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              /**
               * お礼を更新する
               */
              patch: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods12['patch']['status']>(prefix, prefix3, PATCH, option).send(),
              /**
               * お礼を更新する
               */
              $patch: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods12['patch']['status']>(prefix, prefix3, PATCH, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          }
        },
        thanks: {
          /**
           * お礼を投稿する
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods13['post']['status']>(prefix, PATH13, POST, option).send(),
          /**
           * お礼を投稿する
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods13['post']['status']>(prefix, PATH13, POST, option).send().then(r => r.body),
          /**
           * お礼一覧を取得する
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods13['get']['status']>(prefix, PATH13, GET, option).send(),
          /**
           * お礼一覧を取得する
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods13['get']['status']>(prefix, PATH13, GET, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH13}`
        }
      },
      manager: {
        appointment: {
          _id: (val3: number) => {
            const prefix3 = `${PATH14}/${val3}`

            return {
              /**
               * 予約を更新する
               */
              patch: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods14['patch']['status']>(prefix, prefix3, PATCH, option).send(),
              /**
               * 予約を更新する
               */
              $patch: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods14['patch']['status']>(prefix, prefix3, PATCH, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          }
        },
        appointments: {
          /**
           * 予約一覧を取得する
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods15['get']['status']>(prefix, PATH15, GET, option).send(),
          /**
           * 予約一覧を取得する
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods15['get']['status']>(prefix, PATH15, GET, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH15}`
        },
        office: {
          _id: (val3: number) => {
            const prefix3 = `${PATH16}/${val3}`

            return {
              /**
               * 単一の事務所の詳細を取得する
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods16['get']['status']>(prefix, prefix3, GET, option).send(),
              /**
               * 単一の事務所の詳細を取得する
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods16['get']['status']>(prefix, prefix3, GET, option).send().then(r => r.body),
              /**
               * 単一の事務所を更新する
               */
              patch: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods16['patch']['status']>(prefix, prefix3, PATCH, option).send(),
              /**
               * 単一の事務所を更新する
               */
              $patch: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods16['patch']['status']>(prefix, prefix3, PATCH, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          }
        },
        office_client: {
          _id: (val3: number) => {
            const prefix3 = `${PATH17}/${val3}`

            return {
              /**
               * 事業所で管理している事業所利用者一覧を更新する
               */
              patch: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods17['patch']['status']>(prefix, prefix3, PATCH, option).send(),
              /**
               * 事業所で管理している事業所利用者一覧を更新する
               */
              $patch: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods17['patch']['status']>(prefix, prefix3, PATCH, option).send().then(r => r.body),
              /**
               * 事業所で管理している事業所利用者一覧を削除する
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods17['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              /**
               * 事業所で管理している事業所利用者一覧を削除する
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods17['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          }
        },
        office_clients: {
          /**
           * 事業所で管理している事業所利用者一覧を取得する
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods18['get']['status']>(prefix, PATH18, GET, option).send(),
          /**
           * 事業所で管理している事業所利用者一覧を取得する
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods18['get']['status']>(prefix, PATH18, GET, option).send().then(r => r.body),
          /**
           * 事業所で管理している事業所利用者を作成する
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods18['post']['status']>(prefix, PATH18, POST, option).send(),
          /**
           * 事業所で管理している事業所利用者を作成する
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods18['post']['status']>(prefix, PATH18, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH18}`
        },
        staff: {
          _id: (val3: number) => {
            const prefix3 = `${PATH19}/${val3}`

            return {
              /**
               * スタッフを削除する
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods19['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              /**
               * スタッフを削除する
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods19['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              /**
               * スタッフを更新する
               */
              patch: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods19['patch']['status']>(prefix, prefix3, PATCH, option).send(),
              /**
               * スタッフを更新する
               */
              $patch: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods19['patch']['status']>(prefix, prefix3, PATCH, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          }
        },
        staffs: {
          /**
           * スタッフ一覧を取得する
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods20['get']['status']>(prefix, PATH20, GET, option).send(),
          /**
           * スタッフ一覧を取得する
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods20['get']['status']>(prefix, PATH20, GET, option).send().then(r => r.body),
          /**
           * スタッフを追加する
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods20['post']['status']>(prefix, PATH20, POST, option).send(),
          /**
           * スタッフを追加する
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods20['post']['status']>(prefix, PATH20, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH20}`
        },
        thank: {
          _id: (val3: number) => {
            const prefix3 = `${PATH21}/${val3}`

            return {
              /**
               * お礼を削除する
               */
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods21['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              /**
               * お礼を削除する
               */
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods21['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`
            }
          }
        },
        thanks: {
          /**
           * お礼一覧を取得する
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods22['get']['status']>(prefix, PATH22, GET, option).send(),
          /**
           * お礼一覧を取得する
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods22['get']['status']>(prefix, PATH22, GET, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH22}`
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
