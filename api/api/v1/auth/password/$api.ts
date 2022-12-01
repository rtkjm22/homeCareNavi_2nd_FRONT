import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/auth/password'
  const POST = 'POST'
  const PATCH = 'PATCH'

  return {
    /**
     * パラメータのメールアドレスにパスワードリセットメールを送信する。
     * @returns OK
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * パラメータのメールアドレスにパスワードリセットメールを送信する。
     * @returns OK
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    /**
     * パスワードリセットを確定する。
     * @param option.body - ヘッダーにclient,access-token,uid。ボディにpassword,password_confirmationが必須。
     * @returns OK
     */
    patch: (option: { body: Methods0['patch']['reqBody'], headers?: Methods0['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['patch']['resBody'], Methods0['patch']['resHeaders'], Methods0['patch']['status']>(prefix, PATH0, PATCH, option).json(),
    /**
     * パスワードリセットを確定する。
     * @param option.body - ヘッダーにclient,access-token,uid。ボディにpassword,password_confirmationが必須。
     * @returns OK
     */
    $patch: (option: { body: Methods0['patch']['reqBody'], headers?: Methods0['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['patch']['resBody'], Methods0['patch']['resHeaders'], Methods0['patch']['status']>(prefix, PATH0, PATCH, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
