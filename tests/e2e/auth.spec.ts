import { test, expect } from '@playwright/test'
import { setAuthStorage } from '../support'
import { CLIENT_AUTH_PATHS } from '../screenshot.spec'

for (const path of CLIENT_AUTH_PATHS) {
  test(`${path}ページにはクライアントでログインしないとアクセス出来ないこと`, async ({ page, context }) => {
    await page.goto(path)
    await expect(page.getByRole('alert')).toHaveText(/ログインしてください/)
    await expect(page).toHaveURL('/client/login')

    await setAuthStorage(context, 'manager')

    await page.goto(path)
    await expect(page.getByRole('alert')).toHaveText(/ページのアクセス権がありませんでした/)
    await expect(page).toHaveURL('/')
  })
}

test('クライアントが新規登録、ログイン、ログアウトの一連の動作ができること', async ({ page }) => {
  await page.goto('/')

  await page.getByText('新規登録').click()
  await expect(page).toHaveURL('/client/signup')

  await page.getByPlaceholder('田中 太郎').fill('テスト 太郎')

  await page.getByPlaceholder('例) homecarenavi@mail.com').fill('test@example.com')

  await page.getByPlaceholder('半角英数字8文字以上').fill('password')

  await page.getByPlaceholder('000-0000-0000').fill('111-1111-1111')

  await page.getByPlaceholder('0000000').fill('1628804')

  await page.getByPlaceholder('東京都世田谷区祖師谷4-3-15').fill('東京都新宿区市谷本村町5-1')

  await page.getByRole('button', { name: '新規登録' }).click({ force: true })

  await page.waitForNavigation({ timeout: 3000 })
  await expect(page).toHaveURL('/client/signup/complete')

  await expect(page.getByRole('alert')).toHaveText(/メールを送信しました。メールに記載されているリンクにアクセスしてください。/)

  await page.getByRole('link', { name: 'ホームケアナビトップに戻る' }).click()
  await expect(page).toHaveURL('/')

  await page.getByText('ログイン').click()
  await expect(page).toHaveURL('/client/login')

  await page.getByPlaceholder('例) homecarenavi@mail.com').fill('test@example.com')

  await page.getByPlaceholder('半角英数字8文字以上').fill('password')

  await page.getByRole('button', { name: 'ログイン' }).click()
  await expect(page).toHaveURL('/')

  await expect(page.getByRole('alert')).toHaveText(/ようこそテスト 太郎さん/)

  await page.getByText('ログアウト').click()

  await expect(page.getByRole('alert')).toHaveText(/ログアウトしました/)
  await expect(page).toHaveURL('/')
})
