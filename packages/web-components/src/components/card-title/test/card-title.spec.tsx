import { newSpecPage } from '@stencil/core/testing';
import { CardTitle } from '../card-title';

describe('CardTitle', () => {
  it('should render Card Title', async () => {
    const page = await newSpecPage({
      components: [CardTitle],
      html: `
        <dct-card-title>Card Title</dct-card-title>`,
    });

    expect(page.root).toBeTruthy();
  });
});
