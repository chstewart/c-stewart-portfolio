import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/c-stewart.com/);
});

test('get blog link', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Blog' }).click();

  await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();
});

test('get resume link', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Resume' }).click();

  await expect(page.getByRole('heading', { name: 'Resume' })).toBeVisible();
});
