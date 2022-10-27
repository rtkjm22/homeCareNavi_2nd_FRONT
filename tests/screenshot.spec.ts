import { test, expect } from '@playwright/test'
import { setAuthStorage, waitMount } from './support'

export const CLIENT_AUTH_PATHS = [
  '/client/auth/profile/edit',
  '/client/auth/profile',
  '/client/auth/reserve/complete',
  '/client/auth/thanks/complete',
  '/client/auth/search'
] as const

export const MANAGER_AUTH_PATHS = [
  // 現在は無し
]

const PATHS = [
  '/client/signup/complete',
  '/client/signup',
  '/client/login',
  '/manager/signup/complete',
  '/manager/signup',
  '/manager/login',
  '/password-reset/complete',
  '/password-reset/edit',
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
