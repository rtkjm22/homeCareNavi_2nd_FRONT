import { test, expect } from '@playwright/test'
import { setAuthStorage, waitMount } from './support'

// クライアントログイン後
export const CLIENT_AUTH_PATHS = [
  '/client/auth/profile/edit',
  '/client/auth/profile',
  '/client/auth/reserves/complete',
  '/client/auth/reserves',
  '/client/auth/reserves/new',
  '/client/auth/thanks/complete'
] as const

// マネージャーログイン後
export const MANAGER_AUTH_PATHS = [
  '/manager/auth/clients/edit',
  '/manager/auth/clients',
  '/manager/auth/profile/edit_inst',
  '/manager/auth/profile/edit',
  '/manager/auth/reserves',
  '/manager/auth/staffs/edit',
  '/manager/auth/staffs/new'
]

// ログイン前
const PATHS = [
  '/client/signup/complete',
  '/client/signup',
  '/client/login',
  '/manager/signup/complete',
  '/manager/signup',
  '/manager/login',
  '/offices/1',
  '/offices?areas=東京都港区,東京都北区&page=1&prefecture=東京都&area=関東', // エリア検索
  '/offices?words=東京都&page=1', // 単語検索
  '/offices?lat=35.740216&lng=139.7030277&page=1', // 現在地検索
  '/password-reset/complete',
  // '/password-reset/edit'
  '/password-reset',
  '/district?area=関東&prefecture=東京都',
  '/',
  'prefecture?area=関東'
] as const

for (const path of PATHS) {
  test(`screenshot ${path}`, async ({ page }) => {
    await page.goto(path)
    await waitMount(page)
    // office系統の画面でテストが失敗しやすいので、office系統のみ2秒待ってからスクリーンショットを比較する
    if (path.startsWith('/offices')) {
      await page.waitForTimeout(2000)
    }
    const fileName = path.replaceAll('/', '-') + '.png'
    await expect(page).toHaveScreenshot(fileName, { fullPage: true })
  })
}

for (const path of CLIENT_AUTH_PATHS) {
  test(`screenshot ${path}`, async ({ page, context }) => {
    await setAuthStorage(context, 'client')
    await page.goto(path)
    await waitMount(page)
    const fileName = path.replaceAll('/', '-') + '.png'
    await expect(page).toHaveScreenshot(fileName, { fullPage: true })
  })
}

for (const path of MANAGER_AUTH_PATHS) {
  test(`screenshot ${path}`, async ({ page, context }) => {
    await setAuthStorage(context, 'manager')
    await page.goto(path)
    await waitMount(page)
    const fileName = path.replaceAll('/', '-') + '.png'
    await expect(page).toHaveScreenshot(fileName, { fullPage: true })
  })
}
