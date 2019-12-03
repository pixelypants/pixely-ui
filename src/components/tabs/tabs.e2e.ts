import { newE2EPage } from '@stencil/core/testing';

describe('pxly-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pxly-tabs></pxly-tabs>');

    const element = await page.find('pxly-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
