import { test, expect, type Page } from '@playwright/test'

/** 検索結果が125,カードが10枚,ページネーションが表示されているかを検証 */
const expectOfficeResult = async (page: Page) => {
  await expect(page.locator('[aria-rowcount="125"]')).toHaveText('125')
  const displayOfficeCount = await page.getByRole('listitem').filter({ hasText: '祖師谷ホームケアそよ風' }).count()
  expect(displayOfficeCount).toBe(10)
  expect(page.getByRole('button', { name: '1' })).toBeTruthy()
}

test('エリア検索を実行し、件数が多い場合ページネーションされていること', async ({ page }) => {
  await page.goto('http://localhost:8080/')
  
  await page.getByRole('button', { name: '関東' }).click()
  await page.getByText('東京都').click()
  await page.getByText('千代田区').click()
  await page.getByText('中央区').click()
  await page.getByText('港区').click()

  await page.getByRole('button', { name: '検索する' }).click()

  await expect(page).toHaveURL(/\/offices\?areas=.*&page=1/)
  
  await expectOfficeResult(page)
  await page.getByRole('button', { name: '2' }).click()
  await expect(page).toHaveURL(/\/offices\?areas=.*&page=2/)
})

test('サイドバーでエリア検索ができること', async ({ page }) => {
  await page.goto('/offices?areas=東京都港区,東京都北区&page=1&prefecture=東京都&area=関東')

  await page.getByRole('cell', { name: '港区' }).locator('span').first().click()
  await page.getByRole('cell', { name: '北区' }).locator('span').first().click()
  await page.getByRole('cell', { name: '千代田区' }).locator('span').first().click()
  await page.getByRole('cell', { name: '中央区' }).locator('span').first().click()

  await page.getByRole('link', { name: '検索する' }).click()

  await expect(page).toHaveURL(encodeURI('http://localhost:8080/offices?areas=東京都千代田区,東京都中央区&page=1&prefecture=東京都&area=関東'))

  await expectOfficeResult(page)
})

test('トップページ及び検索一覧画面で単語検索できること', async ({ page }) => {
  // トップページ
  await page.goto('http://localhost:8080/')

  await page.getByRole('textbox', { name: '事業所名、市区町村など' }).fill('新宿')
  await page.getByRole('textbox', { name: '事業所名、市区町村など' }).press('Enter')

  await expect(page).toHaveURL(encodeURI('http://localhost:8080/offices?words=新宿&page=1'))

  await expectOfficeResult(page)

  // 検索一覧画面
  await page.getByRole('textbox', { name: '事業所名など' }).fill('茨城')
  await page.getByRole('textbox', { name: '事業所名など' }).press('Enter')

  await expect(page).toHaveURL(encodeURI('http://localhost:8080/offices?words=茨城&page=1'))

  await expectOfficeResult(page)
})

test('トップページ及び検索一覧画面で現在地検索できること', async ({ page, context }) => {
  // 現在位置情報設定
  context.grantPermissions(['geolocation'])
  context.setGeolocation({
    latitude: 35.67225,
    longitude: 139.70003
  })

  // トップページ
  await page.goto('http://localhost:8080/')

  await page.getByRole('button', { name: '現在地から探す' }).click()

  await expect(page).toHaveURL(/\/offices\?lat=.*&lng=.*&page=1/)

  await expectOfficeResult(page)

  // 検索一覧画面
  await page.getByRole('button', { name: '現在地から探す' }).click()

  await expect(page).toHaveURL(/\/offices\?lat=.*&lng=.*&page=1/)

  await expectOfficeResult(page)
})
