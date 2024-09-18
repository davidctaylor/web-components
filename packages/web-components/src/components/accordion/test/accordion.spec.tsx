import { newSpecPage } from '@stencil/core/testing';
import { MockHTMLElement } from '@stencil/core/mock-doc';
import { Accordion } from '../accordion';

describe('Accordion', () => {
  beforeAll(() => {
    Object.defineProperty(MockHTMLElement.prototype, 'assignedElements', {
      value: () => [], // `jest.fn()` works as well, but will result in just one shared function for all elements
      configurable: true,
      writable: true,
    });
    Object.defineProperty(MockHTMLElement.prototype, 'assignedNodes', {
      value: () => [],
      configurable: true,
      writable: true,
    });
  });

  it('should render Accordion', async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `<dct-accordion></dct-accordion>`,
    });

    expect(page.root).toEqualHtml(`
      <dct-accordion class="accordion-container collapsed" role="list">
       <mock:shadow-root>
         <button aria-controls="dct-accordion-1" class="accordion-heading" id="dct-accordion-header-1">
          <slot name="heading">
         </button>
         <div aria-labelledby="dct-accordion-header-1" class="accordion-content" id="dct-accordion-1" role="region">
           <div class="accordion-content-slot">
             <slot></slot>
           </div>
         </div>
         <div class="accordion-divider active full"></div>
       </mock:shadow-root>
      </dct-accordion>
    `);
  });

  it('should render Accordion with item', async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `
      <dct-accordion disabled="false">
        <dct-item-heading slot="heading">
          <span slot="start" class="material-symbols-outlined">expand_more</span>
          <div slot="heading">Accordion heading</div>
          <div slot="sub-heading">Optional supporting text</div>
          <span slot="end" class="material-symbols-outlined">expand_more</span>
        </dct-item-heading>  
        <dct-item><span>Accordion content</span></dct-item>
      </<dct-accordion>`,
    });

    expect(page.root).toEqualHtml(`
      <dct-accordion class="accordion-container collapsed" disabled="false" role="list">
        <mock:shadow-root>
          <button aria-controls="dct-accordion-2" class="accordion-heading" id="dct-accordion-header-2">
            <slot name="heading"></slot>
          </button>
          <div aria-labelledby="dct-accordion-header-2" class="accordion-content" id="dct-accordion-2" role="region">
            <div class="accordion-content-slot">
              <slot></slot>
            </div>
          </div>
          <div class="accordion-divider active full"></div>
        </mock:shadow-root>
      <dct-item-heading slot="heading">
        <span slot="start" class="material-symbols-outlined">expand_more</span>
        <div slot="heading">Accordion heading</div>
        <div slot="sub-heading">Optional supporting text</div>
        <span slot="end" class="material-symbols-outlined">expand_more</span>
      </dct-item-heading>
      <dct-item><span>Accordion content</span></dct-item>`);
  });
});
