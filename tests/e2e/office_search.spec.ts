import { test, expect } from '@playwright/test'

test('エリア検索を実行し、件数が多い場合ページネーションされていること', async ({ page }) => {
  await page.goto('http://localhost:8080/')
  
  await page.getByRole('button', { name: '関東' }).click()
  await page.getByText('東京都').click()
  await page.getByText('千代田区').click()
  await page.getByText('中央区').click()
  await page.getByText('港区').click()

  await page.getByRole('button', { name: '検索する' }).click()

  await expect(page).toHaveURL(/\/offices\?areas=.*&page=1/)
  
  await expect(page.locator('[aria-rowcount="125"]')).toHaveText('125')
  const displayOfficeCount = await page.getByRole('listitem').filter({ hasText: '祖師谷ホームケアそよ風' }).count()
  expect(displayOfficeCount).toBe(10)
  await page.getByRole('button', { name: '13' }).click()
  await expect(page).toHaveURL(/\/offices\?areas=.*&page=13/)
})
