import { newSpecPage } from '@stencil/core/testing';
import { Item } from '../item';

describe('Item', () => {
  it('should render Item', async () => {
    const page = await newSpecPage({
      components: [Item],
      html: `
        <dct-item disabled=false type=text href=https://www.google.com/ target=_black>
          <span>Item content</span>
        </dct-item>`,
    });

    expect(page.root).toEqualHtml(`
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
