import type { BrowserContext, Page } from 'playwright-core'
import { CLIENT_HEADERS, MANAGER_HEADERS } from '~/mocks/handlers/utils'
import openapi from '~/openapi.json'

const CLIENT = openapi.components.schemas.User['x-examples']['example-1']

const MANAGER = { ...CLIENT, ...{ type: 'Manager' } }

/**
 * セッションストレージにダミーの値を保存し、ログイン状態にする。
 * 第２引数でユーザーの種類を設定する。デフォルトはクライアントユーザー。
 * */
export const setAuthStorage = async (context: BrowserContext, userType: 'client' | 'manager' = 'client') => {
  let user
  let headers
  switch (userType) {
    case 'client':
      user = CLIENT
      headers = CLIENT_HEADERS
      break
    case 'manager':
      user = MANAGER
      headers = MANAGER_HEADERS
      break
  }

  const sessionStorage = JSON.stringify({
    ...headers,
    user: JSON.stringify(user)
  })

  await context.addInitScript((storage) => {
    if (window.location.hostname === 'localhost') {
      const entries = JSON.parse(storage) as Record<string, string>
      for (const [key, value] of Object.entries(entries)) {
        window.sessionStorage.setItem(key, value)
      }
    }
  }, sessionStorage)
}

/**
 * ページ遷移時に表示しきっていないのにスクショすることが多々あるので対策。
 * App.vueにonMounted時にtrueになるdata属性があるので、trueになるまで待つ。
 * */
export const waitMount = async (page: Page) => {
  await page.locator('div[data-test-mounted=true]').waitFor({
    timeout: 5000
  })
}
