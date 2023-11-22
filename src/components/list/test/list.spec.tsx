import { newSpecPage } from '@stencil/core/testing';
import { List } from '../list';

xdescribe('List', () => {
  it('should render List', async () => {
    const listPage = await newSpecPage({
      components: [List],
      html: `
        <dct-list disabled=false heading="List Heading">
          <dct-item separator=full>
            <div>First according content</div>
          </dct-item>
        </dct-list>`,
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
