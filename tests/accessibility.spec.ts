import { test, expect, Locator, Page } from '@playwright/test';

// this test will pass as it will test the playwright.dev page
test('Accessibility test which will pass', async ({ page }) => {

  // await page.goto('https://playwright.dev/');

  // this test will fail if you uncomment the line below and comment the line above

  await page.goto('https://www.archdaily.com/page/2');

  const originVisibleElements: Locator[] = await getAllVisibleChildren(page);

  page.setViewportSize({ width: 320, height: 720 });

  let currentVisibleElements: Locator[] = await getAllVisibleChildren(page);

  expect(originVisibleElements.sort()).toEqual(currentVisibleElements.sort());
});

async function getAllVisibleChildren(page: Page): Promise<Locator[]> {
  const visibleChildren: Locator[] = [];

  const children: Locator[] = await page.locator('//body/*').all();

  if (children.length !== 0) {
    for (const child of children) {
      await child.evaluate(node => node.scrollIntoView());

      if (await child.isVisible()) {
        visibleChildren.push(child);
      }
    }
  }
  return visibleChildren;
}
