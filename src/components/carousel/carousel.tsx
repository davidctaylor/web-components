import { h, Component, Element, Host } from '@stencil/core';
import { CarouselEffect, CarouselState } from '../interfaces/carousel';
import { CarouselMaterialEffect } from './carousel-material-effect';

@Component({
  tag: 'dct-carousel',
  styleUrl: './carousel.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class Card {
  @Element() el!: HTMLDctCarouselElement;

  private _abortController: AbortController = new AbortController();
  private _carouselState: CarouselState = {
    activeIndex: 0,
    cards: [],
    cardSpacing: 16,
    cardWidth: 0,
    cardWidthMin: 56,
    cardHeight: 0,
    position: {
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      diff: 0,
    },
    width: 0,
    height: 0,
    containerEl: undefined,
  };
  private _carouselEffect: CarouselEffect = new CarouselMaterialEffect();

  private _contentEl!: HTMLElement;

  componentDidLoad() {
    this._initializeCarousel();
    this._addEventListeners();

    // setTimeout(() => {
    //   this._carouselState.position.startX = 0;
    //   this._carouselState.position.startY = 0;
    //   this._carouselState.position.currentX = 1430;
    //   this._carouselState.position.currentY = 0;

    //   this._carouselEffect.update(this._carouselState);
    // }, 2000);
  }

  disconnectedCallback() {
    this._abortController.abort();
  }

  render() {
    return (
      <Host
        class={{
          'carousel-container': true,
        }}
      >
        <div
          class={{
            carousel: true,
          }}
          ref={(el) => (this._contentEl = el)}
        >
          <slot></slot>
        </div>
        <div
          class={{
            'carousel-controls': true,
          }}
        >
          <button onClick={() => this._onClickNavigation('prev')}>prev</button>
          <button onClick={() => this._onClickNavigation('next')}>next</button>
        </div>
      </Host>
    );
  }

  private _allCards() {
    return Array.from(
      this.el.querySelectorAll(':scope > dct-card')
    ) as HTMLDctCardElement[];
  }

  private _initializeCarousel() {
    this._carouselState.containerEl = this._contentEl;
    this._carouselState.cards = this._allCards();
    this._carouselState.cardWidth =
      this._carouselState.cards[0].getBoundingClientRect().width;
    this._carouselState.cardHeight =
      this._carouselState.cards[0].getBoundingClientRect().height;
    this._carouselState.width = this.el.getBoundingClientRect().width;

    this._carouselState.cards.forEach((card) => {
      console.log(card, card.getBoundingClientRect());
    });

    this._carouselEffect.update(this._carouselState);
  }

  private _onClickNavigation(direction: 'prev' | 'next') {
    if (
      (direction === 'prev' && this._carouselState.activeIndex === 0) ||
      (direction === 'next' &&
        this._carouselState.activeIndex + 1 >
          this._carouselState.cards.length - 1)
    ) {
      return;
    }
    this._onClickPage(direction);
  }

  private _onClickPage(direction: 'prev' | 'next') {
    this._carouselEffect.next(this._carouselState, direction);
    this._resetCarouselPosition();
  }

  private _onScrollEvent() {
    // const scrollX =
    //   this._carouselState.position.currentX -
    //   this._carouselState.position.startX;
    // console.log('_onScrollEvent', scrollX);
    // // if (scrollX > this._carouselState.cardWidth / 2) {
    // //   this._carouselState.activeIndex += 1;
    // //   this._resetCarouselPosition();
    // //   console.log(
    // //     'XXX new page',
    // //     this._carouselState.activeIndex,
    // //     this._carouselState.position
    // //   );
    // // }

    this._carouselEffect.update(this._carouselState);
    this._resetCarouselPosition();
  }

  private _resetCarouselPosition() {
    this._carouselState.position.startX = 0;
    this._carouselState.position.startY = 0;
    this._carouselState.position.currentX = 0;
    this._carouselState.position.startX = 0;
    this._carouselState.position.currentY = 0;
  }

  private _addEventListeners() {
    // this.el.addEventListener('scroll', (event) => {
    //   console.log('XXX scroll', (event.target as HTMLElement).scrollLeft);
    //   // this._intersecting((event.target as HTMLElement).scrollLeft);
    // });
    // this.el.addEventListener('scrollend', (event) => {
    //   console.log('XXX scrollend', (event.target as HTMLElement).scrollLeft);
    // });

    this._contentEl.addEventListener(
      'pointerdown',
      (event) => {
        this._carouselState.position.startX = event.pageX;
        this._carouselState.position.startY = event.pageY;
        // console.log('XXX down', event, event.pageX, event.pageY);
      },
      { signal: this._abortController.signal }
    );
    this._contentEl.addEventListener(
      'pointermove',
      (event) => {
        // console.log('XXX pointermove', event, event.pageX, event.pageY);
        // this._touch.currentX = event.pageX;
        // this._touch.currentY = event.pageY;
        // this._touch.diff = this._touch.currentX - this._touch.startX;
        this._carouselState.position.currentX = event.pageX;
        this._carouselState.position.currentY = event.pageY;
        // this._onScrollEvent();
      },
      { signal: this._abortController.signal }
    );
  }

  //   ['pointerup', 'mouseleave'].forEach(
  //     (item) => {
  //       this.el.addEventListener(item, () => {
  //         // selectedItem = undefined;
  //         // movement = false;
  //         // document.querySelectorAll(`${config.carouselId} a`).forEach(function(item) {
  //         //     item.style.pointerEvents = 'all';
  //       });
  //     },
  //     { signal: this._abortController.signal }
  //   );
  // }
}
