import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/client/histories'
  const GET = 'GET'

  return {
    /**
     * 事業所の閲覧履歴を取得する
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).send(),
    /**
     * 事業所の閲覧履歴を取得する
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
