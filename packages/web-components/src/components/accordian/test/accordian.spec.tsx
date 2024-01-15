import { newSpecPage } from '@stencil/core/testing';
import { MockHTMLElement } from '@stencil/core/mock-doc';
import { Accordian } from '../accordian';

describe('Accordian', () => {
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

  it('should render Accordian', async () => {
    const page = await newSpecPage({
      components: [Accordian],
      html: `<dct-accordian></dct-accordian>`,
    });

    expect(page.root).toEqualHtml(`
      <dct-accordian class="accordian-container collapsed" role="list">
       <mock:shadow-root>
         <button aria-controls="dct-accordian-1" class="accordian-heading" id="dct-accordian-header-1">
          <slot name="heading">
         </button>
         <div aria-labelledby="dct-accordian-header-1" class="accordian-content" id="dct-accordian-1" role="region">
           <div class="accordian-content-slot">
             <slot></slot>
           </div>
         </div>
         <div class="accordion-divider active full"></div>
       </mock:shadow-root>
      </dct-accordian>
    `);
  });

  it('should render Accordian with item', async () => {
    const page = await newSpecPage({
      components: [Accordian],
      html: `
      <dct-accordian disabled="false">
        <dct-item-heading slot="heading">
          <span slot="start" class="material-symbols-outlined">expand_more</span>
          <div slot="heading">Accordian heading</div>
          <div slot="sub-heading">Optional supporting text</div>
          <span slot="end" class="material-symbols-outlined">expand_more</span>
        </dct-item-heading>  
        <dct-item><span>Accordian content</span></dct-item>
      </<dct-accordian>`,
    });

    expect(page.root).toEqualHtml(`
      <dct-accordian class="accordian-container collapsed" disabled="false" role="list">
        <mock:shadow-root>
          <button aria-controls="dct-accordian-2" class="accordian-heading" id="dct-accordian-header-2">
            <slot name="heading"></slot>
          </button>
          <div aria-labelledby="dct-accordian-header-2" class="accordian-content" id="dct-accordian-2" role="region">
            <div class="accordian-content-slot">
              <slot></slot>
            </div>
          </div>
          <div class="accordion-divider active full"></div>
        </mock:shadow-root>
      <dct-item-heading slot="heading">
        <span slot="start" class="material-symbols-outlined">expand_more</span>
        <div slot="heading">Accordian heading</div>
        <div slot="sub-heading">Optional supporting text</div>
        <span slot="end" class="material-symbols-outlined">expand_more</span>
      </dct-item-heading>
      <dct-item><span>Accordian content</span></dct-item>`);
  });
});
