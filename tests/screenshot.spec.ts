import { test, expect } from '@playwright/test'

const PATHS = [
  '/client/profile/edit',
  '/client/profile',
  '/client/reserve/complete',
  '/client/signup/complete',
  '/client/signup',
  '/client/thanks/complete',
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
    const fileName = path.replaceAll('/', '-') + '.png'
    await page.waitForLoadState('domcontentloaded')
    await expect(page).toHaveScreenshot(fileName, { fullPage: true })
  })
}
