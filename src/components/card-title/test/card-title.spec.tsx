import { newSpecPage } from '@stencil/core/testing';
import { CardTitle } from '../card-title';

xdescribe('CardTitle', () => {
  it('should render List', async () => {
    const listPage = await newSpecPage({
      components: [CardTitle],
      html: `
        <dct-card-title>Card Title</dct-card-title>`,
    });

    expect(listPage.root).toEqualHtml(`
      <dct-item class="item-container" disabled="false" href="https://www.google.com/" target="_black" type="text">
       <mock:shadow-root>
        <slot></slot>
        <div class="item-separator none"></div>
       </mock:shadow-root>
       <span>Item content</span>
      </dct-item>
    `);
  });
});
