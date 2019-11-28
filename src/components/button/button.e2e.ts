import { newE2EPage } from '@stencil/core/testing';

describe('pxly-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pxly-button></pxly-button>');

    const element = await page.find('pxly-button');
    expect(element).toHaveClass('hydrated');
  });
});
