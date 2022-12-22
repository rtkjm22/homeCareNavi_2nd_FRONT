import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './api/v1/auth'
import type { Methods as Methods1 } from './api/v1/auth/password'
import type { Methods as Methods2 } from './api/v1/auth/sign_in'
import type { Methods as Methods3 } from './api/v1/auth/sign_out'
import type { Methods as Methods4 } from './api/v1/auth/validate_token'
import type { Methods as Methods5 } from './api/v1/client/book_mark/_id@number'
import type { Methods as Methods6 } from './api/v1/client/bookmarks'
import type { Methods as Methods7 } from './api/v1/client/histories'
import type { Methods as Methods8 } from './api/v1/client/offices/_id@number'
import type { Methods as Methods9 } from './api/v1/client/offices/area_search'
import type { Methods as Methods10 } from './api/v1/client/offices/nearest_search'
import type { Methods as Methods11 } from './api/v1/client/offices/word_search'
import type { Methods as Methods12 } from './api/v1/client/reserves'
import type { Methods as Methods13 } from './api/v1/client/thank/_id@number'
import type { Methods as Methods14 } from './api/v1/client/thanks'
import type { Methods as Methods15 } from './api/v1/manager/office'
import type { Methods as Methods16 } from './api/v1/manager/office_clients'
import type { Methods as Methods17 } from './api/v1/manager/office_clients/_id@number'
import type { Methods as Methods18 } from './api/v1/manager/office_images'
import type { Methods as Methods19 } from './api/v1/manager/office_images/_id@number'
import type { Methods as Methods20 } from './api/v1/manager/office_overview'
import type { Methods as Methods21 } from './api/v1/manager/reserves'
import type { Methods as Methods22 } from './api/v1/manager/reserves/_id@number'
import type { Methods as Methods23 } from './api/v1/manager/staffs'
import type { Methods as Methods24 } from './api/v1/manager/staffs/_id@number'
import type { Methods as Methods25 } from './api/v1/manager/thank/_id@number'
import type { Methods as Methods26 } from './api/v1/manager/thanks'
import type { Methods as Methods27 } from './health_check'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/auth'
  const PATH1 = '/api/v1/auth/password'
  const PATH2 = '/api/v1/auth/sign_in'
  const PATH3 = '/api/v1/auth/sign_out'
  const PATH4 = '/api/v1/auth/validate_token'
  const PATH5 = '/api/v1/client/book_mark'
  const PATH6 = '/api/v1/client/bookmarks'
  const PATH7 = '/api/v1/client/histories'
  const PATH8 = '/api/v1/client/offices'
  const PATH9 = '/api/v1/client/offices/area_search'
  const PATH10 = '/api/v1/client/offices/nearest_search'
  const PATH11 = '/api/v1/client/offices/word_search'
  const PATH12 = '/api/v1/client/reserves'
  const PATH13 = '/api/v1/client/thank'
  const PATH14 = '/api/v1/client/thanks'
  const PATH15 = '/api/v1/manager/office'
  const PATH16 = '/api/v1/manager/office_clients'
  const PATH17 = '/api/v1/manager/office_images'
  const PATH18 = '/api/v1/manager/office_overview'
  const PATH19 = '/api/v1/manager/reserves'
  const PATH20 = '/api/v1/manager/staffs'
  const PATH21 = '/api/v1/manager/thank'
  const PATH22 = '/api/v1/manager/thanks'
  const PATH23 = '/health_check'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    api: {
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
            patch: (option: { body: Methods1['patch']['reqBody'], headers?: Methods1['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods1['patch']['resBody'], Methods1['patch']['resHeaders'], Methods1['patch']['status']>(prefix, PATH1, PATCH, option).json(),
            /**
             * パスワードリセットを確定する。
             * @param option.body - ヘッダーにclient,access-token,uid。ボディにpassword,password_confirmationが必須。
             * @returns OK
             */
            $patch: (option: { body: Methods1['patch']['reqBody'], headers?: Methods1['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
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
            delete: (option?: { headers?: Methods3['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, PATH3, DELETE, option).json(),
            /**
             * ヘッダーに`access-token`,`uid`,`client`必須。ログアウトする。
             * @returns OK
             */
            $delete: (option?: { headers?: Methods3['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, PATH3, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH3}`
          },
          validate_token: {
            /**
             * ヘッダー内のaccess-token,client,expiry,uidを検証する
             */
            get: (option?: { headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods4['get']['resBody'], Methods4['get']['resHeaders'], Methods4['get']['status']>(prefix, PATH4, GET, option).json(),
            /**
             * ヘッダー内のaccess-token,client,expiry,uidを検証する
             */
            $get: (option?: { headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
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
          patch: (option: { body: Methods0['patch']['reqBody'], headers?: Methods0['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods0['patch']['resBody'], Methods0['patch']['resHeaders'], Methods0['patch']['status']>(prefix, PATH0, PATCH, option).json(),
          /**
           * 登録者情報を更新する
           */
          $patch: (option: { body: Methods0['patch']['reqBody'], headers?: Methods0['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods0['patch']['resBody'], Methods0['patch']['resHeaders'], Methods0['patch']['status']>(prefix, PATH0, PATCH, option).json().then(r => r.body),
          /**
           * 退会する
           * @returns OK
           */
          delete: (option?: { headers?: Methods0['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json(),
          /**
           * 退会する
           * @returns OK
           */
          $delete: (option?: { headers?: Methods0['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH0}`
        },
        client: {
          book_mark: {
            _id: (val4: number) => {
              const prefix4 = `${PATH5}/${val4}`

              return {
                /**
                 * ブックマークを削除する
                 */
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, prefix4, DELETE, option).send(),
                /**
                 * ブックマークを削除する
                 */
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, prefix4, DELETE, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix4}`
              }
            }
          },
          bookmarks: {
            /**
             * ブックマークをつけた事業所一覧を取得する
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).send(),
            /**
             * ブックマークをつけた事業所一覧を取得する
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, PATH6, GET, option).send().then(r => r.body),
            /**
             * ブックマークを作成する
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, PATH6, POST, option).send(),
            /**
             * ブックマークを作成する
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, PATH6, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${PATH6}`
          },
          histories: {
            /**
             * 事業所の閲覧履歴を取得する
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).send(),
            /**
             * 事業所の閲覧履歴を取得する
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods7['get']['status']>(prefix, PATH7, GET, option).send().then(r => r.body),
            $path: () => `${prefix}${PATH7}`
          },
          offices: {
            _id: (val4: number) => {
              const prefix4 = `${PATH8}/${val4}`

              return {
                /**
                 * 単一の事務所の詳細を取得する
                 * @returns OK
                 */
                get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix4, GET, option).json(),
                /**
                 * 単一の事務所の詳細を取得する
                 * @returns OK
                 */
                $get: (option?: { config?: T | undefined } | undefined) =>
                  fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix4, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix4}`
              }
            },
            area_search: {
              /**
               * 事業所一覧をエリア検索する
               * @returns エリア検索、現在地検索、単語検索のレスポンス
               */
              get: (option: { query: Methods9['get']['query'], config?: T | undefined }) =>
                fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH9, GET, option).json(),
              /**
               * 事業所一覧をエリア検索する
               * @returns エリア検索、現在地検索、単語検索のレスポンス
               */
              $get: (option: { query: Methods9['get']['query'], config?: T | undefined }) =>
                fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods9['get']['query'] } | undefined) =>
                `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            },
            nearest_search: {
              /**
               * 事業所一覧を取得する。現在地で絞り込む。
               * @returns エリア検索、現在地検索、単語検索のレスポンス
               */
              get: (option: { query: Methods10['get']['query'], config?: T | undefined }) =>
                fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH10, GET, option).json(),
              /**
               * 事業所一覧を取得する。現在地で絞り込む。
               * @returns エリア検索、現在地検索、単語検索のレスポンス
               */
              $get: (option: { query: Methods10['get']['query'], config?: T | undefined }) =>
                fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods10['get']['query'] } | undefined) =>
                `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            },
            word_search: {
              /**
               * 事業所一覧を取得する。全文一致で絞り込む。
               * @returns エリア検索、現在地検索、単語検索のレスポンス
               */
              get: (option: { query: Methods11['get']['query'], config?: T | undefined }) =>
                fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH11, GET, option).json(),
              /**
               * 事業所一覧を取得する。全文一致で絞り込む。
               * @returns エリア検索、現在地検索、単語検索のレスポンス
               */
              $get: (option: { query: Methods11['get']['query'], config?: T | undefined }) =>
                fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods11['get']['query'] } | undefined) =>
                `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          reserves: {
            /**
             * ホームケアを予約する
             * @returns OK
             */
            post: (option: { body: Methods12['post']['reqBody'], headers?: Methods12['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, PATH12, POST, option).json(),
            /**
             * ホームケアを予約する
             * @returns OK
             */
            $post: (option: { body: Methods12['post']['reqBody'], headers?: Methods12['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, PATH12, POST, option).json().then(r => r.body),
            /**
             * 事業所利用者が予約一覧を取得する
             * @returns OK
             */
            get: (option?: { headers?: Methods12['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH12, GET, option).json(),
            /**
             * 事業所利用者が予約一覧を取得する
             * @returns OK
             */
            $get: (option?: { headers?: Methods12['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH12, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH12}`
          },
          thank: {
            _id: (val4: number) => {
              const prefix4 = `${PATH13}/${val4}`

              return {
                /**
                 * お礼を削除する
                 */
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods13['delete']['status']>(prefix, prefix4, DELETE, option).send(),
                /**
                 * お礼を削除する
                 */
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods13['delete']['status']>(prefix, prefix4, DELETE, option).send().then(r => r.body),
                /**
                 * お礼を更新する
                 */
                patch: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods13['patch']['status']>(prefix, prefix4, PATCH, option).send(),
                /**
                 * お礼を更新する
                 */
                $patch: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods13['patch']['status']>(prefix, prefix4, PATCH, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix4}`
              }
            }
          },
          thanks: {
            /**
             * お礼を投稿する
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods14['post']['status']>(prefix, PATH14, POST, option).send(),
            /**
             * お礼を投稿する
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods14['post']['status']>(prefix, PATH14, POST, option).send().then(r => r.body),
            /**
             * お礼一覧を取得する
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods14['get']['status']>(prefix, PATH14, GET, option).send(),
            /**
             * お礼一覧を取得する
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods14['get']['status']>(prefix, PATH14, GET, option).send().then(r => r.body),
            $path: () => `${prefix}${PATH14}`
          }
        },
        manager: {
          office: {
            /**
             * Manager自身の事務所詳細を取得する
             * @returns OK
             */
            get: (option?: { headers?: Methods15['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, PATH15, GET, option).json(),
            /**
             * Manager自身の事務所詳細を取得する
             * @returns OK
             */
            $get: (option?: { headers?: Methods15['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, PATH15, GET, option).json().then(r => r.body),
            /**
             * Manager自身の事務所を更新する
             * @returns OK
             */
            patch: (option: { body: Methods15['patch']['reqBody'], headers?: Methods15['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods15['patch']['resBody'], BasicHeaders, Methods15['patch']['status']>(prefix, PATH15, PATCH, option).json(),
            /**
             * Manager自身の事務所を更新する
             * @returns OK
             */
            $patch: (option: { body: Methods15['patch']['reqBody'], headers?: Methods15['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods15['patch']['resBody'], BasicHeaders, Methods15['patch']['status']>(prefix, PATH15, PATCH, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH15}`
          },
          office_clients: {
            _id: (val4: number) => {
              const prefix4 = `${PATH16}/${val4}`

              return {
                /**
                 * 事業所で管理している事業所利用者を更新する
                 * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
                 */
                patch: (option: { body: Methods17['patch']['reqBody'], headers?: Methods17['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods17['patch']['status']>(prefix, prefix4, PATCH, option, 'FormData').send(),
                /**
                 * 事業所で管理している事業所利用者を更新する
                 * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
                 */
                $patch: (option: { body: Methods17['patch']['reqBody'], headers?: Methods17['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods17['patch']['status']>(prefix, prefix4, PATCH, option, 'FormData').send().then(r => r.body),
                /**
                 * 事業所で管理している事業所利用者を削除する
                 */
                delete: (option?: { headers?: Methods17['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods17['delete']['status']>(prefix, prefix4, DELETE, option).send(),
                /**
                 * 事業所で管理している事業所利用者を削除する
                 */
                $delete: (option?: { headers?: Methods17['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods17['delete']['status']>(prefix, prefix4, DELETE, option).send().then(r => r.body),
                /**
                 * 事業所で管理している事業所利用者を取得する（現時点では編集画面で使用する用途のみ）
                 * @returns OK
                 */
                get: (option?: { headers?: Methods17['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, prefix4, GET, option).json(),
                /**
                 * 事業所で管理している事業所利用者を取得する（現時点では編集画面で使用する用途のみ）
                 * @returns OK
                 */
                $get: (option?: { headers?: Methods17['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, prefix4, GET, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix4}`
              }
            },
            /**
             * 事業所で管理している事業所利用者一覧を取得する
             * @returns OK
             */
            get: (option?: { headers?: Methods16['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH16, GET, option).json(),
            /**
             * 事業所で管理している事業所利用者一覧を取得する
             * @returns OK
             */
            $get: (option?: { headers?: Methods16['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
            /**
             * 事業所で管理している事業所利用者を作成する
             * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
             */
            post: (option: { body: Methods16['post']['reqBody'], headers?: Methods16['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods16['post']['status']>(prefix, PATH16, POST, option, 'FormData').send(),
            /**
             * 事業所で管理している事業所利用者を作成する
             * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
             */
            $post: (option: { body: Methods16['post']['reqBody'], headers?: Methods16['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods16['post']['status']>(prefix, PATH16, POST, option, 'FormData').send().then(r => r.body),
            $path: () => `${prefix}${PATH16}`
          },
          office_images: {
            _id: (val4: number) => {
              const prefix4 = `${PATH17}/${val4}`

              return {
                /**
                 * Manager自身の事業所画像を更新する
                 * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
                 * @returns OK
                 */
                patch: (option: { body: Methods19['patch']['reqBody'], headers?: Methods19['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods19['patch']['resBody'], BasicHeaders, Methods19['patch']['status']>(prefix, prefix4, PATCH, option, 'FormData').json(),
                /**
                 * Manager自身の事業所画像を更新する
                 * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
                 * @returns OK
                 */
                $patch: (option: { body: Methods19['patch']['reqBody'], headers?: Methods19['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods19['patch']['resBody'], BasicHeaders, Methods19['patch']['status']>(prefix, prefix4, PATCH, option, 'FormData').json().then(r => r.body),
                $path: () => `${prefix}${prefix4}`
              }
            },
            /**
             * Manager自身の事業所画像を作成する
             * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
             * @returns OK
             */
            post: (option: { body: Methods18['post']['reqBody'], headers?: Methods18['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods18['post']['resBody'], BasicHeaders, Methods18['post']['status']>(prefix, PATH17, POST, option, 'FormData').json(),
            /**
             * Manager自身の事業所画像を作成する
             * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
             * @returns OK
             */
            $post: (option: { body: Methods18['post']['reqBody'], headers?: Methods18['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods18['post']['resBody'], BasicHeaders, Methods18['post']['status']>(prefix, PATH17, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${PATH17}`
          },
          office_overview: {
            /**
             * Manager自身の施設概要を更新する
             * @returns OK
             */
            patch: (option: { body: Methods20['patch']['reqBody'], headers?: Methods20['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods20['patch']['resBody'], BasicHeaders, Methods20['patch']['status']>(prefix, PATH18, PATCH, option).json(),
            /**
             * Manager自身の施設概要を更新する
             * @returns OK
             */
            $patch: (option: { body: Methods20['patch']['reqBody'], headers?: Methods20['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods20['patch']['resBody'], BasicHeaders, Methods20['patch']['status']>(prefix, PATH18, PATCH, option).json().then(r => r.body),
            /**
             * Manager自身の施設概要を取得する
             * @returns OK
             */
            get: (option?: { headers?: Methods20['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods20['get']['resBody'], Methods20['get']['resHeaders'], Methods20['get']['status']>(prefix, PATH18, GET, option).json(),
            /**
             * Manager自身の施設概要を取得する
             * @returns OK
             */
            $get: (option?: { headers?: Methods20['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods20['get']['resBody'], Methods20['get']['resHeaders'], Methods20['get']['status']>(prefix, PATH18, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH18}`
          },
          reserves: {
            _id: (val4: number) => {
              const prefix4 = `${PATH19}/${val4}`

              return {
                /**
                 * 予約を更新する
                 * @returns OK
                 */
                patch: (option?: { headers?: Methods22['patch']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods22['patch']['resBody'], BasicHeaders, Methods22['patch']['status']>(prefix, prefix4, PATCH, option).json(),
                /**
                 * 予約を更新する
                 * @returns OK
                 */
                $patch: (option?: { headers?: Methods22['patch']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods22['patch']['resBody'], BasicHeaders, Methods22['patch']['status']>(prefix, prefix4, PATCH, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix4}`
              }
            },
            /**
             * 予約一覧を取得する
             * @returns OK
             */
            get: (option?: { headers?: Methods21['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, PATH19, GET, option).json(),
            /**
             * 予約一覧を取得する
             * @returns OK
             */
            $get: (option?: { headers?: Methods21['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, PATH19, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH19}`
          },
          staffs: {
            _id: (val4: number) => {
              const prefix4 = `${PATH20}/${val4}`

              return {
                /**
                 * スタッフを削除する
                 */
                delete: (option?: { headers?: Methods24['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods24['delete']['status']>(prefix, prefix4, DELETE, option).send(),
                /**
                 * スタッフを削除する
                 */
                $delete: (option?: { headers?: Methods24['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods24['delete']['status']>(prefix, prefix4, DELETE, option).send().then(r => r.body),
                /**
                 * スタッフを更新する
                 * @returns OK
                 */
                patch: (option: { body: Methods24['patch']['reqBody'], headers?: Methods24['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods24['patch']['resBody'], BasicHeaders, Methods24['patch']['status']>(prefix, prefix4, PATCH, option).json(),
                /**
                 * スタッフを更新する
                 * @returns OK
                 */
                $patch: (option: { body: Methods24['patch']['reqBody'], headers?: Methods24['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
                  fetch<Methods24['patch']['resBody'], BasicHeaders, Methods24['patch']['status']>(prefix, prefix4, PATCH, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix4}`
              }
            },
            /**
             * スタッフ一覧を取得する
             * @returns OK
             */
            get: (option?: { headers?: Methods23['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, PATH20, GET, option).json(),
            /**
             * スタッフ一覧を取得する
             * @returns OK
             */
            $get: (option?: { headers?: Methods23['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, PATH20, GET, option).json().then(r => r.body),
            /**
             * スタッフを追加する
             * @returns OK
             */
            post: (option: { body: Methods23['post']['reqBody'], headers?: Methods23['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods23['post']['resBody'], BasicHeaders, Methods23['post']['status']>(prefix, PATH20, POST, option).json(),
            /**
             * スタッフを追加する
             * @returns OK
             */
            $post: (option: { body: Methods23['post']['reqBody'], headers?: Methods23['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
              fetch<Methods23['post']['resBody'], BasicHeaders, Methods23['post']['status']>(prefix, PATH20, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${PATH20}`
          },
          thank: {
            _id: (val4: number) => {
              const prefix4 = `${PATH21}/${val4}`

              return {
                /**
                 * お礼を削除する
                 */
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods25['delete']['status']>(prefix, prefix4, DELETE, option).send(),
                /**
                 * お礼を削除する
                 */
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods25['delete']['status']>(prefix, prefix4, DELETE, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix4}`
              }
            }
          },
          thanks: {
            /**
             * お礼一覧を取得する
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods26['get']['status']>(prefix, PATH22, GET, option).send(),
            /**
             * お礼一覧を取得する
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods26['get']['status']>(prefix, PATH22, GET, option).send().then(r => r.body),
            $path: () => `${prefix}${PATH22}`
          }
        }
      }
    },
    health_check: {
      /**
       * ECSのヘルスチェック用エンドポイント
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, PATH23, GET, option).json(),
      /**
       * ECSのヘルスチェック用エンドポイント
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH23}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
