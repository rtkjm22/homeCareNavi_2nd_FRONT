import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_id@number'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/manager/office_images'
  const POST = 'POST'
  const PATCH = 'PATCH'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * Manager自身の事業所画像を更新する
         * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
         * @returns OK
         */
        patch: (option: { body: Methods1['patch']['reqBody'], headers?: Methods1['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option, 'FormData').json(),
        /**
         * Manager自身の事業所画像を更新する
         * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
         * @returns OK
         */
        $patch: (option: { body: Methods1['patch']['reqBody'], headers?: Methods1['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option, 'FormData').json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    /**
     * Manager自身の事業所画像を作成する
     * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
     * @returns OK
     */
    post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
    /**
     * Manager自身の事業所画像を作成する
     * @param option.body - ※画像はContentTypeがapplication/jsonでは送信出来ないため、multipart/form-dataかつformDataでラップして送信すること
     * @returns OK
     */
    $post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
