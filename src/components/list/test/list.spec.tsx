import { newSpecPage } from '@stencil/core/testing';
import { List } from '../list';

describe('List', () => {
  it('should render List', async () => {
    const listPage = await newSpecPage({
      components: [List],
      html: `
        <dct-list disabled=false heading="List Heading">
          <dct-item separator=full>
            <span>Item content</span>
          </dct-item>
        </dct-list>`,
    });

    expect(listPage.root).toEqualHtml(`
      <dct-list class="list-container" disabled="false" heading="List Heading" role="list">
        <mock:shadow-root>
          <div class="list-heading">
            List Heading
          </div>
          <slot></slot>
          </mock:shadow-root>
          <dct-item separator="full">
          <span>
            Item content
          </span>
        </dct-item>
      </dct-list>
    `);
  });
});
