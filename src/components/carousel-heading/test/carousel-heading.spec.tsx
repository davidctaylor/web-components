import { newSpecPage } from '@stencil/core/testing';
import { CarouselHeading } from '../carousel-heading';

describe('CarouselHeading', () => {
  it('should render ItemHeading', async () => {
    const page = await newSpecPage({
      components: [CarouselHeading],
      html: `
        <dct-item-heading disabled=false>
          <span slot="start" class="material-symbols-outlined">expand_more</span>
          <div slot="heading">Accordian heading</div>
          <div slot="sub-heading">Optional supporting text</div>
          <span slot="end" class="material-symbols-outlined">expand_more</span>
        </dct-item-heading>`,
    });

    expect(page.root).toEqualHtml(`
      <dct-item-heading class="item-heading" disabled="false">
       <mock:shadow-root>
        <div class="icon">
          <slot name="start"></slot>
        </div>
        <div class="heading">
          <slot name="heading"></slot>
          <slot name="sub-heading"></slot>
        </div>
        <div class="icon">
          <slot name="end"></slot>
        </div>
       </mock:shadow-root>
       <span class="material-symbols-outlined" slot="start">expand_more</span>
       <div slot="heading">Accordian heading</div>
       <div slot="sub-heading">Optional supporting text</div>
       <span class="material-symbols-outlined" slot="end">expand_more</span>
      </dct-item>
    `);
  });
});
