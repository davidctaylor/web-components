import { action } from '@storybook/addon-actions';

export default {
  title: 'DCTComponents/Carousel',
  parameters: {
    actions: {},
    layout: 'fullscreen',
  },
};

const handleEvent = (e) => {
  action('carouselChange')(e.detail);
};

const handleCardEvent = (e) => {
  action('carouselCardChange')(e.detail);
};

window.addEventListener('carouselChange', handleEvent);
window.addEventListener('carouselCardChange', handleCardEvent);

const Template = (args) => {
  const card = (title, subTitle, image) => {
    return `<dct-card class="carousel-card">
      ${image ? `<img src="${image}"/>` : ''}
      ${
        title
          ? `<dct-card-header overlay="${image !== undefined}">
        ${title ? `<span>${title}</span>` : ''}
        ${subTitle ? `<span slot="sub-heading">${subTitle}</span>` : ''}
        <span slot="end" class="material-symbols-outlined" style="color: white">more_vert</span>
      </dct-card-header>`
          : ''
      }
    </dct-card>`;
  };

  return `
  <div style="display: flex; justify-content:center; margin: 16px">
    <dct-carousel ${
      !args.displayHeader ? `footer-text="${args.footerText}"` : ``
    } ${args.displayHeader ? `header-text="${args.headerText}"` : ``}>
      <span slot="icon" class="material-symbols-outlined">arrow_forward</span>
      ${card('Carousel card 1', 'Card sub-title', 'desert-road.webp')}
      ${card(undefined, undefined, 'infinite-railway-lines.webp')}
      ${card(
        'Carousel card 3 mountain road webp',
        undefined,
        'mountain-road.webp'
      )}
      ${card('Carousel card 4', undefined, undefined)}
      ${card(
        'Carousel card 5 card 3 mountain road webp',
        'Card sub-title',
        'rowers.webp'
      )}
    </dct-carousel>
  </div>`;
};

export const Carousel = Template.bind({});
Carousel.args = {
  disabled: false,
  headerText: 'Show all Carousel items',
  footerText: 'Show all Carousel items',
  displayHeader: true,
};