import { newSpecPage } from '@stencil/core/testing';
import { MockHTMLElement } from '@stencil/core/mock-doc';
import { Button } from '../button'

describe('Button', () => {
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

  it('should render Button component', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
        <dct-button disabled=false>
        </dct-button>`,
    });

    expect(page.root).toBeTruthy();
  });
});
