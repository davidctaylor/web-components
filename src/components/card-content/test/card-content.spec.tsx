import { newSpecPage } from '@stencil/core/testing';
import { CardContent } from '../card-content';

describe('CardContent', () => {
  it('should render Card content', async () => {
    const listPage = await newSpecPage({
      components: [CardContent],
      html: `
        <dct-card-content>Card Title</dct-card-content>`,
    });

    expect(listPage.root).toEqualHtml(`
      <dct-card-content class="card-content">
       <mock:shadow-root>
        <slot></slot>
       </mock:shadow-root>
       Card Title
      </dct-card-content>
    `);
  });
});
