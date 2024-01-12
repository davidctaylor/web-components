import { transitionEnd } from '@utils/utils';
import {
  CarouselEffect,
  CarouselState,
  CarouselCardEventType,
} from '../interfaces';

export class CarouselMaterialEffect implements CarouselEffect {
  private _eventCb: (event: CarouselCardEventType) => void;

  public event(cb: (event: CarouselCardEventType) => void) {
    this._eventCb = cb;
  }

  public renderAll(carousel: CarouselState, isEnabled: boolean) {
    if (isEnabled) {
      carousel.containerEl.classList.add('display-all');
      carousel.cards.forEach((card) => {
        card.style.width = `${carousel.cardWidth}px`;
        card.style.flexBasis = `${carousel.cardWidth}px`;
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
    carousel.position.startX = 0;

    this.render(carousel);
  }

  public scroll(carousel: CarouselState) {
    const scrollX = carousel.position.currentX - carousel.position.startX;

    const distance = scrollX > 0 ? scrollX * 1 : scrollX * -1;
    if ((scrollX > 0 ? scrollX * 1 : scrollX * -1) > carousel.cardWidth / 2) {
      const idx = Math.round(distance / carousel.cardWidth);

      if (
        scrollX < 0 &&
        carousel.activeIndex + idx < carousel.cards.length - 1
      ) {
        carousel.activeIndex += idx;
      } else if (scrollX > 0) {
        if (carousel.activeIndex - idx > 0) {
          carousel.activeIndex -= idx;
        } else {
          carousel.activeIndex = 0;
        }
      }
      this.render(carousel);
      carousel.position.startX = carousel.position.currentX;
    }
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
      remaining -=
        cardSizes[0] > carousel.cardWidthMin ? 0 : carousel.cardSpacing;
      const adjCard = remaining / fullCards.length;
      cardSizes = cardSizes.map((cw) => {
        cw += cw === carousel.cardWidth ? adjCard : 0;
        return cw;
      });
    }

    let cardIdx = 0;
    for (let i = 0; i < carousel.cards.length; i += 1) {
      let emitted = false;
      if (
        i < carousel.activeIndex ||
        i >= carousel.activeIndex + cardSizes.length
      ) {
        carousel.cards[i].style.borderWidth = `0px`;
        carousel.cards[i].style.flexBasis = '0px';
        carousel.cards[i].style.marginRight = `0px`;
        this._eventCb({ card: carousel.cards[i], visibility: 'hidden' });
        continue;
      }
      carousel.cards[i].style.removeProperty('border-width');
      carousel.cards[i].style.flexBasis = `${cardSizes[cardIdx]}px`;
      if (cardSizes[cardIdx] === carousel.cardWidthMin) {
        this._eventCb({ card: carousel.cards[i], visibility: 'small' });
        emitted = true;
        carousel.cards[i]
          .querySelector('dct-card-title')
          ?.classList.add('card-small');
        carousel.cards[i]
          .querySelector('dct-card-content')
          ?.classList.add('card-small');
      } else {
        carousel.cards[i]
          .querySelector('dct-card-title')
          ?.classList.remove('card-small');
        carousel.cards[i]
          .querySelector('dct-card-content')
          ?.classList.remove('card-small');
      }
      if (cardIdx < cardSizes.length - 1) {
        carousel.cards[i].style.marginRight = `${carousel.cardSpacing}px`;
        !emitted &&
          this._eventCb({ card: carousel.cards[i], visibility: 'visible' });
        emitted = true;
      } else {
        carousel.cards[i].style.marginRight = `0px`;
      }

      !emitted &&
        this._eventCb({ card: carousel.cards[i], visibility: 'hidden' });

      cardIdx += 1;
    }
  }
}
