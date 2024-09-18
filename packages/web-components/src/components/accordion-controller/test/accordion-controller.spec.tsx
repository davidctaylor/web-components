import { newSpecPage } from '@stencil/core/testing';
import { MockHTMLElement } from '@stencil/core/mock-doc';
import { AccordionController } from '../accordion-controller';

describe('AccordionController', () => {
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

  it('should render Accordion Controller', async () => {
    const page = await newSpecPage({
      components: [AccordionController],
      html: `
        <dct-accordion-controller disabled=false display-multiple=true>
          <dct-accordion divider=full>
            <dct-item-heading slot="heading">
              <div slot="heading">First Accordion Heading</div>
              <span slot="end" class="material-symbols-outlined">expand_more</span>
            </dct-item-heading>
            <dct-item><div>First according content</div></dct-item>
          </dct-accordion>
        </dct-accordion-controller`,
    });

    expect(page.root).toEqualHtml(`
      <dct-accordion-controller class="accordion-controller-container accordion-controller-multiple" disabled="false" display-multiple="true" role="presentation">
       <mock:shadow-root>
        <slot></slot>
       </mock:shadow-root>
        <dct-accordion divider="full">
          <dct-item-heading slot="heading">
            <div slot="heading">First Accordion Heading</div>
            <span slot="end" class="material-symbols-outlined">expand_more</span>
          </dct-item-heading> <dct-item><div>First according content</div></dct-item>
        </dct-accordion>
      </dct-accordion-controller>
    `);
  });
});
