import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_id@number'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/manager/office_clients'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * 事業所で管理している事業所利用者を更新する
         * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
         */
        patch: (option: { body: Methods1['patch']['reqBody'], headers?: Methods1['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option, 'FormData').send(),
        /**
         * 事業所で管理している事業所利用者を更新する
         * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
         */
        $patch: (option: { body: Methods1['patch']['reqBody'], headers?: Methods1['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option, 'FormData').send().then(r => r.body),
        /**
         * 事業所で管理している事業所利用者を削除する
         */
        delete: (option?: { headers?: Methods1['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        /**
         * 事業所で管理している事業所利用者を削除する
         */
        $delete: (option?: { headers?: Methods1['delete']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        /**
         * 事業所で管理している事業所利用者を取得する（現時点では編集画面で使用する用途のみ）
         * @returns OK
         */
        get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 事業所で管理している事業所利用者を取得する（現時点では編集画面で使用する用途のみ）
         * @returns OK
         */
        $get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    /**
     * 事業所で管理している事業所利用者一覧を取得する
     * @returns OK
     */
    get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 事業所で管理している事業所利用者一覧を取得する
     * @returns OK
     */
    $get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * 事業所で管理している事業所利用者を作成する
     * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
     */
    post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'FormData').send(),
    /**
     * 事業所で管理している事業所利用者を作成する
     * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
     */
    $post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'FormData').send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
