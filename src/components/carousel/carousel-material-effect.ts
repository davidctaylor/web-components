import { transitionEnd } from '@utils/utils';
import { CarouselEffect, CarouselState } from '../interfaces/carousel';

export class CarouselMaterialEffect implements CarouselEffect {
  public renderAll(carousel: CarouselState, isEnabled: boolean) {

    if (isEnabled) {
      carousel.containerEl.classList.add('display-all');
      carousel.cards.forEach(card => {
        card.style.width = `${carousel.cardWidth}px`;
        card.style.flexBasis =  `${carousel.cardWidth}px`;
        card.style.marginRight = `${carousel.cardSpacing}px`;
      });
    } else {
      transitionEnd(carousel.cards[0], () => {
        carousel.containerEl.classList.remove('display-all');
      });

      this.render(carousel);     
    }
  }
  
  public next(carousel: CarouselState, direction: 'prev' | 'next') {
    if (
      direction === 'next' &&
      carousel.activeIndex + 1 > carousel.cards.length - 2
    ) {
      return;
    }

    carousel.activeIndex =
      direction === 'prev' && carousel.activeIndex > 0
        ? carousel.activeIndex - 1
        : carousel.activeIndex + 1;
    carousel.position.currentX = carousel.activeIndex * carousel.cardWidth;
    carousel.position.startX = 0;

    this.render(carousel);
  }

  public scroll(carousel: CarouselState) {
    const scrollX = carousel.position.currentX - carousel.position.startX;
    carousel.activeIndex = Math.round(carousel.position.currentX / carousel.cardWidth);
    console.log('_onScrollEvent', carousel.position.currentX, scrollX, carousel.activeIndex);
    this.render(carousel);
  }

  public render(carousel: CarouselState) {
    let firstCard =
      carousel.activeIndex === 0 ||
      carousel.activeIndex === carousel.cards.length - 1
        ? carousel.cardWidth
        : carousel.cardWidthMin;
    let widthAvailable = carousel.width - firstCard;
    let cardSizes = [firstCard];

    while (widthAvailable > 0) {
      const cw = Math.min(carousel.cardWidth, widthAvailable);
      cardSizes.push(cw);
      widthAvailable -= cw;
    }

    if (carousel.cards.length - carousel.activeIndex > 0) {
      cardSizes[cardSizes.length - 1] = carousel.cardWidthMin;
      const fullCards = cardSizes.filter((cw) => cw === carousel.cardWidth);
      let remaining = carousel.width - cardSizes.reduce((a, b) => (a += b), 0);
      remaining -= fullCards.length * carousel.cardSpacing;
      remaining -= cardSizes[0] > carousel.cardWidthMin ? 0 : 16;
      const adjCard = remaining / fullCards.length;
      cardSizes = cardSizes.map((cw) => {
        cw += cw === carousel.cardWidth ? adjCard : 0;
        return cw;
      });
    }

    console.log('xxx', cardSizes);

    let cardIdx = 0;
    for (let i = 0; i < carousel.cards.length; i += 1) {
      if (i < carousel.activeIndex || i >= carousel.activeIndex + cardSizes.length) {
        // carousel.cards[i].style.width = `0px`;
        carousel.cards[i].style.flexBasis = '0px';
        carousel.cards[i].style.marginRight = `0px`;
        continue;
      }
      // carousel.cards[i].style.width = `${cardSizes[cardIdx]}px`;
      carousel.cards[i].style.flexBasis = `${cardSizes[cardIdx]}px`;
      if (cardIdx < cardSizes.length -1) {
        carousel.cards[i].style.marginRight = `${carousel.cardSpacing}px`;
      } else {
        carousel.cards[i].style.marginRight = `0px`;
      }
      cardIdx += 1;
    }
  }
}
