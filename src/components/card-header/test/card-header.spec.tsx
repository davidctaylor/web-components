import { newSpecPage } from '@stencil/core/testing';
import { CardHeader } from '../card-header';

xdescribe('CardHeader', () => {
  it('should render List', async () => {
    const listPage = await newSpecPage({
      components: [CardHeader],
      html: `
        <dct-card-header>Card Title</dct-card-header>`,
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
