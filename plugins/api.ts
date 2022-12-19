import aspida, { FetchConfig, HTTPError } from '@aspida/fetch'
import aspidaApi from '~/api/$api'

const isHTTPError = (e: unknown): e is HTTPError => {
  // eがnullではなく、objectであり、かつe.reposenseが実行できる
  return (!!e && typeof e === 'object' && 'response' in e)
}

type RailsError = {
  errors: {
    full_messages: string[]
  } |
  string[]
}

type AuthHeaders = {
  'access-token': string;
  client: string;
  expiry: string;
  uid: string;
};

/** セッションストレージから認証ヘッダーを取得する */
const getAuthDataFromStorage = (): AuthHeaders | null => {
  const authHeaders = {
    'access-token': sessionStorage.getItem('access-token'),
    client: sessionStorage.getItem('client'),
    expiry: sessionStorage.getItem('expiry'),
    uid: sessionStorage.getItem('uid')
  }

  // ヘッダーが一つでも欠けていたらnullを返す
  if (Object.values(authHeaders).includes(null)) {
    return null
  } else {
    // @ts-ignore
    return authHeaders
  }
}

/** セッションストレージへ認証ヘッダーをセットする */
const setAuthDataToStorage = (headers: AuthHeaders) => {
  sessionStorage.setItem('access-token', headers['access-token'])
  sessionStorage.setItem('client', headers.client)
  sessionStorage.setItem('uid', headers.uid)
  sessionStorage.setItem('expiry', headers.expiry)
}

/** セッションストレージの認証ヘッダーを削除する */
const removeAuthDataFromStorage = (): void => {
  sessionStorage.removeItem('access-token')
  sessionStorage.removeItem('client')
  sessionStorage.removeItem('uid')
  sessionStorage.removeItem('expiry')
}

/**
 * RailsApiと通信するためのプラグイン。
 * @see openApiドキュメント https://rahhi555.stoplight.io/studio/home-care-navi-second
 * @see Nuxt3のフェッチキャッシュについて https://zenn.dev/ytr0903/articles/6acccb5fa816ee
 * @example
 *  // ユーザーログイン(/api/v1/auth/sign_in)にリクエストする場合
 * await $api.client.api.v1.auth.sign_in.post({ body: signInBody })
    .then((res) => {
      // resを使用した処理
    })
    .catch(async (e) => {
      // エラーメッセージは $api.getErrorMessage にeを渡すことで取得できる
      const message = await $api.getErrorMessage(e)
    })

    // useAsyncDataを使用してキャッシュを使用する場合（詳細はリンクのNuxt3のフェッチキャッシュについて）
    const { data, error } = useAsyncData(() => $api.client.api.v1.manager.staffs.get())
 * */
class Api {
  public client
  private baseConfig: FetchConfig

  constructor (baseURL: string) {
    this.baseConfig = {
      baseURL,
      throwHttpErrors: true
    }
    this.client = aspidaApi(aspida(fetch, this.baseConfig))
  }

  /** useAsyncDataのerrorからエラーメッセージを取得する */
  public async getErrorMessage (e: unknown): Promise<string> {
    try {
      if (isHTTPError(e)) {
        const { errors } = await e.response.clone().json() as RailsError

        if (Array.isArray(errors)) { return errors[0] }

        return errors.full_messages[0]
      }

      console.error(e)
      return '不明なエラーです'
    } catch (e) {
      console.error(e)
      return 'エラーメッセージを取得出来ませんでした'
    }
  }

  /** $api.client及びセッションストレージに認証ヘッダーをセットする。以降の通信は認証ヘッダーが使用される。 */
  public setAuthHeaders (headers: AuthHeaders) {
    const config: FetchConfig = {
      ...this.baseConfig,
      headers
    }
    this.client = aspidaApi(aspida(fetch, config))
    setAuthDataToStorage(headers)
  }

  /** すべての情報から認証ヘッダー情報を削除する */
  public clearAuthHeaders (): void {
    this.client = aspidaApi(aspida(fetch, this.baseConfig))
    removeAuthDataFromStorage()
  }
}

export default defineNuxtPlugin(() => {
  const apiURL = useRuntimeConfig().public.apiURL
  const api = new Api(apiURL)

  // 初期化時にセッションストレージに認証ヘッダーがある場合はセットする
  const headers = getAuthDataFromStorage()
  if (headers) {
    api.setAuthHeaders(headers)
  }

  return {
    provide: {
      api
    }
  }
})
