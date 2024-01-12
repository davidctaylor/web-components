import { newSpecPage } from '@stencil/core/testing';
import { Carousel } from '../carousel';

describe('Carousel', () => {
  it('should render Carousel', async () => {
    const compoent = await newSpecPage({
      components: [Carousel],
      html: `
        <dct-carousel></dct-carousel>`,
    });

    expect(compoent.root).toBeTruthy();
  });
});
