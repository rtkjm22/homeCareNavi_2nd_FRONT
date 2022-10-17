import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './_id@number'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/manager/office'
  const GET = 'GET'
  const PATCH = 'PATCH'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * 単一の事務所の詳細を取得する
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).send(),
        /**
         * 単一の事務所の詳細を取得する
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).send().then(r => r.body),
        /**
         * 単一の事務所を更新する
         */
        patch: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods0['patch']['status']>(prefix, prefix0, PATCH, option).send(),
        /**
         * 単一の事務所を更新する
         */
        $patch: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods0['patch']['status']>(prefix, prefix0, PATCH, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
