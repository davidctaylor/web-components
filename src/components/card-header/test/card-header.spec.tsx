import { newSpecPage } from '@stencil/core/testing';
import { CardHeader } from '../card-header';

describe('CardHeader', () => {
  it('should render Card Header', async () => {
    const page = await newSpecPage({
      components: [CardHeader],
      html: `
        <dct-card-header>Card Title</dct-card-header>`,
    });

    expect(page.root).toBeTruthy();
  });
});
