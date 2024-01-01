import { h, forceUpdate, Component, Element, Event, EventEmitter, Host, Listen, Prop, Watch } from '@stencil/core';

import { findSlottedElement } from '@utils/utils';
import { CarouselEffect, CarouselState } from '../interfaces/carousel';
import { CarouselMaterialEffect } from './carousel-material-effect';

/**
 * CarouselEventType
 */
export type CarouselEventType = { activeIndex: number, displayAll: boolean, card: HTMLElement };

@Component({
  tag: 'dct-carousel',
  styleUrl: './carousel.scss',
  shadow: true,
  // shadow: {
  //   delegatesFocus: true,
  // },
})
export class Carousel {
  private static _instanceCounter = 0;

  @Element() el!: HTMLDctCarouselElement;

  @Prop() disabled = false;
  /**
   * If true, the carousel is in an render all state.
   */
  @Prop({ mutable: true }) displayAll = false;
  @Watch('displayAll')
  expandedChanged(newValue: boolean, oldValue: boolean) {
    console.log('all', newValue);
    if (newValue !== oldValue) {
      if (newValue) {
        this._carouselEffect.renderAll(this._carouselState, true);
        this.carouselChange.emit({activeIndex: this._carouselState.activeIndex,
          displayAll: this.displayAll,
          card: this._carouselState.cards[this._carouselState.activeIndex]});

        this._headingSlot.renderAll= true;
      }
      else {
        this._headingSlot.renderAll= false;
        this._carouselEffect.renderAll(this._carouselState, false);
      }
    }
  }

  @Listen('resize', { target: 'window' })
  onResize() {
    if (this._debounce) {
      clearTimeout(this._debounce);
      this._debounce = null;
    }

    this._debounce = setTimeout(() => {
      if (this.el.offsetParent === null) {
        return;
      }

      this._carouselState.width = this._carouselState.containerEl.getBoundingClientRect().width;

      this._onScrollEvent();
      forceUpdate(this);
    }, 100);
  }

  /**
   * Carousel change event emitter
   */
  @Event() carouselChange: EventEmitter<CarouselEventType>;

  private _abortController: AbortController = new AbortController();
  private _buttonElement!: HTMLElement;
  private _carouselId!: string;
  private _carouselHeaderId!: string;
  private _carouselState: CarouselState = {
    activeIndex: 0,
    cards: [],
    cardSpacing: 16,
    cardWidth: 0,
    cardWidthMin: 56,
    cardHeight: 0,
    position: {
      active: false,
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      previousX: 0,
      previousY: 0,
    },
    width: 0,
    height: 0,
    containerEl: undefined,
  };
  private _carouselEffect: CarouselEffect = new CarouselMaterialEffect();
  private _contentEl!: HTMLElement;
  private _debounce: ReturnType<typeof setTimeout> | null = null;
  private _headingSlot: HTMLDctCarouselHeadingElement;

  componentWillLoad() {
    Carousel._instanceCounter += 1;
    this._carouselId = `dct-carousel-${Carousel._instanceCounter}`;
    this._carouselHeaderId = `dct-carousel-header-${Carousel._instanceCounter}`;
  }

  componentDidLoad() {
    this._initializeCarousel();
    this._addEventListeners();
    this._headingSlot = this._slottedHeadingElement();
  }

  disconnectedCallback() {
    this._abortController.abort();
  }

  render() {
    return (
      <Host
        class={{
        'carousel-container': true,
      }}>
        <button
          id={this._carouselHeaderId}
          aria-controls={this._carouselId}
          aria-expanded={this.displayAll}
          onClick={this._onClickHeading}
          class={{
            'carousel-heading': true,
          }}
          ref={(el) => (this._buttonElement = el)}
        >
          <slot name='heading'></slot>
        </button>

        <div
          class={{
            carousel: true,
          }}
          aria-labelledby={this._carouselHeaderId}
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

    this._carouselEffect.render(this._carouselState);
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

  private _onClickHeading = () => {
    if (this.disabled) {
      return;
    }
    this.displayAll = !this.displayAll;
  };

  private _onClickPage(direction: 'prev' | 'next') {
    this._carouselEffect.next(this._carouselState, direction);
    this.carouselChange.emit({activeIndex: this._carouselState.activeIndex,
      displayAll: this.displayAll,
      card: this._carouselState.cards[this._carouselState.activeIndex]});
  }

  private _onScrollEvent() {
    // this._carouselEffect.scroll(this._carouselState);
    this.carouselChange.emit({activeIndex: this._carouselState.activeIndex,
      displayAll: this.displayAll,
      card: this._carouselState.cards[this._carouselState.activeIndex]});
  }

  private _slottedHeadingElement = () => {
   return findSlottedElement(this._buttonElement, 'heading', 'DCT-CAROUSEL-HEADING') as HTMLDctCarouselHeadingElement;
  }

  private _addEventListeners() {
    this._contentEl.addEventListener(
      'pointerdown',
      (event) => {
        // this._contentEl.setPointerCapture(event.pointerId);
        if (event.isPrimary) {
          if ((event.target as HTMLElement).hasPointerCapture(event.pointerId)) {
            (event.target as HTMLElement).releasePointerCapture(event.pointerId);
          }
          this._carouselState.position.active = true;
          this._carouselState.position.previousX =
            this._carouselState.position.currentX;
          this._carouselState.position.previousY =
            this._carouselState.position.currentY;
 
          this._carouselState.position.startX = event.pageX;
          this._carouselState.position.startY = event.pageY;
          console.log('XXX down:', this._carouselState.position.startX);
          console.log('XXX down:', this._carouselState.position.currentX );
        }
      },
      { signal: this._abortController.signal }
    );
    this._contentEl.addEventListener(
      'pointerup',
      (event) => {
        this._carouselState.position.currentX = event.pageX;
        this._carouselState.position.currentY = event.pageY;
        console.log('XXX up1:', this._carouselState.position.startX );
        console.log('XXX up2:', this._carouselState.position.currentX );
        this._carouselState.position.active = false;
        this._onScrollEvent();
      },
      { signal: this._abortController.signal }
    );
    this._contentEl.addEventListener(
      'pointercancel',
      () => {
        console.log('XXXpointercancel ');
        this._carouselState.position.active = false;
        // this._resetCarouselPosition();
        this._carouselState.position.startX = this._carouselState.position.previousX;
        this._carouselState.position.startY = this._carouselState.position.previousY
        this._onScrollEvent();
      },
      { signal: this._abortController.signal }
    );
    this._contentEl.addEventListener(
      'pointermove',
      (event) => {
        if (!this._carouselState.position.active) {
          return;
        }
        this._carouselState.position.currentX = event.pageX;
        this._carouselState.position.currentY = event.pageY;
        this._onScrollEvent();
      },
      { signal: this._abortController.signal }
    );
  }
}
