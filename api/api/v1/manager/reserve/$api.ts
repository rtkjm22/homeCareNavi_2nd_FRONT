import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './_id@number'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/manager/reserve'
  const PATCH = 'PATCH'

  return {
    _id: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * 予約を更新する
         * @returns OK
         */
        patch: (option: { body: Methods0['patch']['reqBody'], headers?: Methods0['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, prefix0, PATCH, option).json(),
        /**
         * 予約を更新する
         * @returns OK
         */
        $patch: (option: { body: Methods0['patch']['reqBody'], headers?: Methods0['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, prefix0, PATCH, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
