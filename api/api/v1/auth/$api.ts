import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './password'
import type { Methods as Methods2 } from './sign_in'
import type { Methods as Methods3 } from './sign_out'
import type { Methods as Methods4 } from './validate_token'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/auth'
  const PATH1 = '/api/v1/auth/password'
  const PATH2 = '/api/v1/auth/sign_in'
  const PATH3 = '/api/v1/auth/sign_out'
  const PATH4 = '/api/v1/auth/validate_token'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
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
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
