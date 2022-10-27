import { test, expect } from '@playwright/test'
import { setAuthStorage, waitMount } from './support'

// クライアントログイン後
export const CLIENT_AUTH_PATHS = [
  '/client/auth/profile/edit',
  '/client/auth/profile',
  '/client/auth/reserve/complete',
  '/client/auth/thanks/complete'
] as const

// マネージャーログイン後
export const MANAGER_AUTH_PATHS = [
  '/manager/auth/clients',
  '/manager/auth/staffs/new'
]

// ログイン前
const PATHS = [
  '/client/signup/complete',
  '/client/signup',
  '/client/detail',
  '/client/login',
  '/client/search',
  '/manager/signup/complete',
  '/manager/signup',
  '/manager/login',
  '/password-reset/complete',
  '/password-reset',
  '/district',
  '/',
  'prefecture'
] as const

for (const path of PATHS) {
  test(`screenshot ${path}`, async ({ page }) => {
    await page.goto(path)
    await waitMount(page)
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
