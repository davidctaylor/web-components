import { newSpecPage } from '@stencil/core/testing';
import { MockHTMLElement } from '@stencil/core/mock-doc';
import { AccordianController } from '../accordian-controller';

describe('AccordianController', () => {
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

  it('should render Accordian Controller', async () => {
    const page = await newSpecPage({
      components: [AccordianController],
      html: `
        <dct-accordian-controller disabled=false display-multiple=true>
          <dct-accordian divider=full>
            <dct-item-heading slot="heading">
              <div slot="heading">First Accordian Heading</div>
              <span slot="end" class="material-symbols-outlined">expand_more</span>
            </dct-item-heading>
            <dct-item><div>First according content</div></dct-item>
          </dct-accordian>
        </dct-accordian-controller`,
    });

    expect(page.root).toEqualHtml(`
      <dct-accordian-controller class="accordian-controller-container accordian-controller-multiple" disabled="false" display-multiple="true" role="presentation">
       <mock:shadow-root>
        <slot></slot>
       </mock:shadow-root>
        <dct-accordian divider="full">
          <dct-item-heading slot="heading">
            <div slot="heading">First Accordian Heading</div>
            <span slot="end" class="material-symbols-outlined">expand_more</span>
          </dct-item-heading> <dct-item><div>First according content</div></dct-item>
        </dct-accordian>
      </dct-accordian-controller>
    `);
  });
});
