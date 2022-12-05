import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/manager/office'
  const GET = 'GET'
  const PATCH = 'PATCH'

  return {
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
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
