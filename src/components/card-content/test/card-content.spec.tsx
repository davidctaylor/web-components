import { newSpecPage } from '@stencil/core/testing';
import { CardContent } from '../card-content';

xdescribe('CardContent', () => {
  it('should render List', async () => {
    const listPage = await newSpecPage({
      components: [CardContent],
      html: `
        <dct-card-content>Card Title</dct-card-content>`,
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
