import { newSpecPage } from '@stencil/core/testing';
import { MockHTMLElement } from '@stencil/core/mock-doc';
import { Card } from '../card';

describe('Card', () => {
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

  it('should render Card component', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `
        <dct-card disabled=false>
        </dct-card>`,
    });

    expect(page.root).toBeTruthy();
  });
});
