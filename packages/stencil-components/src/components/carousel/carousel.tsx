import {
  h,
  forceUpdate,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  Watch,
  Method,
} from '@stencil/core';

import {
  CarouselCardEventType,
  CarouselEventType,
  CarouselEffect,
  CarouselState,
} from '../interfaces';
import { CarouselMaterialEffect } from './carousel-material-effect';

/**
 *
 * Carousel's show a collection of items that can be scrolled on and off the screen and have the
 * follwowing features
 * * Contain visual items like images or video, along with optional label text
 * * Items change size as they move through the carousel with small leading/trailing items indicating that there is more content available
 * * Optional controls on the top left or bottom right allow the Carousel to display all content using full screen  grid layout
 *
 * @slot slot - Container for the Carousel's content
 * @slot icon - Header content is placed within an button element and is used to expand or collapse the accordion item.
 */
@Component({
  tag: 'dct-carousel',
  styleUrl: './carousel.scss',
  shadow: true,
})
export class Carousel {
  private static _instanceCounter = 0;

  @Element() el!: HTMLDctCarouselElement;

  /**
   * Optional text to display in Carousels header element determine if
   * all carousel cards are visible
   */
  @Prop() headerText: string = undefined;

  /**
   * Optional text to display in Carousels footer element determine if
   * all carousel cards are visible
   */
  @Prop() footerText: string = undefined;

  /**
   * Carousel is it a disabled state. Default false
   */
  @Prop() disabled = false;

  /**
   * If true, the carousel is in an display all state and all Carousel cards will be displayed
   * in a grid layout
   */
  @Prop({ mutable: true }) displayAll = false;
  @Watch('displayAll')
  displayAllChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this._carouselEffect.displayAll(this._carouselState, this.displayAll);
      this._emitCarouselChange();
    }
  }

  @Listen('resize', { target: 'window' })
  onResize() {
    if (this._debounce !== null) {
      clearTimeout(this._debounce);
      this._debounce = null;
    }

    this._debounce = setTimeout(() => {
      if (this.el.offsetParent === null) {
        return;
      }

      this._carouselState.width =
        this._carouselState.containerEl.getBoundingClientRect().width;

      this._carouselEffect.displayAll(this._carouselState, this.displayAll);
      forceUpdate(this);
    }, 100);
  }

  /**
   * Carousel change event emitter
   */
  @Event({ eventName: 'carouselChange', composed: true, cancelable: true, bubbles: true}) carouselChange: EventEmitter<CarouselEventType>;

  /**
   * Carousel card change event
   */
  @Event() carouselCardChange!: EventEmitter<CarouselCardEventType>;

  /**
   * Method to move from previous/next card with in the carousel. 
   */
  @Method()
  async navigate(direction: 'prev' | 'next') {
    return this._onClickPage(direction);
  }

  private _abortController: AbortController = new AbortController();
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

  componentWillLoad() {
    Carousel._instanceCounter += 1;
    this._carouselId = `dct-carousel-${Carousel._instanceCounter}`;
    this._carouselHeaderId = `dct-carousel-header-${Carousel._instanceCounter}`;
  }

  componentDidLoad() {
    this._initializeCarousel();
    this._addEventListeners();
  }

  disconnectedCallback() {
    this._abortController.abort();
  }

  render() {
    const headerFooter = (isHeader: boolean, btnText: string | undefined) => {
      return (
        <button
          id={this._carouselHeaderId}
          aria-controls={this._carouselId}
          aria-expanded={this.displayAll}
          onClick={this._onClickHeading}
          class={{
            'carousel-header-footer': true,
            footer: !isHeader || btnText === undefined,
            'display-all': this.displayAll,
          }}
        >
          <div
            class={{
              content: true,
              footer: btnText === undefined,
            }}
          >
            {btnText && <p>{btnText}</p>}
            {isHeader && (
              <div class={{ icon: true, footer: btnText === undefined }}>
                <slot name="icon"></slot>
              </div>
            )}
          </div>
        </button>
      );
    };
    return (
      <Host
        class={{
          'carousel-container': true,
        }}
      >
        {headerFooter(true, this.headerText)}
        <div
          class={{
            carousel: true,
          }}
          aria-labelledby={this._carouselHeaderId}
          id={this._carouselId}
          ref={(el) => (this._contentEl = el)}
          role="container"
        >
          <slot onSlotchange={this._onSlotChange}></slot>
        </div>

        {this.footerText && headerFooter(false, this.footerText)}
        <slot name="controls"></slot>
      </Host>
    );
  }

  private _allCards() {
    return Array.from(
      this.el.querySelectorAll(':scope > dct-card'),
    ) as HTMLDctCardElement[];
  }

  private _emitCarouselChange() {
    this.carouselChange.emit({
      hasNext:
        this._carouselState.activeIndex < this._carouselState.cards.length - 2,
      hasPrevious: this._carouselState.activeIndex > 0,
      totalCards: this._carouselState.cards.length,
      displayAll: this.displayAll,
    });
  }

  private _initializeCarousel() {
    this._carouselEffect.event((event: CarouselCardEventType) =>
      this.carouselCardChange.emit(event),
    );
    this._carouselState.containerEl = this._contentEl;
    this._carouselState.cards = this._allCards();
    if (this._carouselState.cards.length > 0) {
      this._carouselState.cardWidth =
        this._carouselState.cards[0].getBoundingClientRect().width;
      this._carouselState.cardHeight =
        this._carouselState.cards[0].getBoundingClientRect().height;
      this._carouselState.width = this.el.getBoundingClientRect().width;
    }

    this._carouselState.cards.forEach((card, idx) => {
      card.role = 'listitem';
      card.setAttribute(
        'aria-label',
        `card ${idx} of ${this._carouselState.cards.length}`,
      );
    });

    this._carouselEffect.displayAll(this._carouselState, this.displayAll);

    this.carouselChange.emit({
      hasNext: true,
      hasPrevious: false,
      totalCards: this._carouselState.cards.length,
      displayAll: this.displayAll,
    });
  }

  private _onSlotChange = () => {
    if (this._debounce !== null) {
      clearTimeout(this._debounce);
      this._debounce = null;
    }

    this._debounce = setTimeout(() => this._initializeCarousel(), 100);
  };

  private _onClickHeading = () => {
    if (this.disabled) {
      return;
    }
    this.displayAll = !this.displayAll;
  };

  private _onClickPage(direction: 'prev' | 'next') {
    this._carouselEffect.next(this._carouselState, direction);
    this._emitCarouselChange();
  };

  private _onScrollEvent() {
    !this.displayAll && this._carouselEffect.scroll(this._carouselState);
  };

  private _addEventListeners() {
    this._contentEl.addEventListener(
      'pointerdown',
      (event) => {
        if (event.isPrimary) {
          event.preventDefault();
          if (
            (event.target as HTMLElement).hasPointerCapture(event.pointerId)
          ) {
            (event.target as HTMLElement).releasePointerCapture(
              event.pointerId,
            );
          }
          this._carouselState.position.active = true;
          this._carouselState.position.previousX =
            this._carouselState.position.currentX;
          this._carouselState.position.previousY =
            this._carouselState.position.currentY;

          this._carouselState.position.startX = event.pageX;
          this._carouselState.position.startY = event.pageY;
        }
      },
      { signal: this._abortController.signal },
    );

    this._contentEl.addEventListener(
      'pointerup',
      (event) => {
        event.preventDefault();
        this._carouselState.position.active = false;
        this._carouselState.position.currentX = event.pageX;
        this._carouselState.position.currentY = event.pageY;

        this._onScrollEvent();
        this._emitCarouselChange();
      },
      { signal: this._abortController.signal },
    );

    this._contentEl.addEventListener(
      'pointercancel',
      (event) => {
        event.preventDefault();
        this._carouselState.position.active = false;
        this._carouselState.position.startX =
          this._carouselState.position.previousX;
        this._carouselState.position.startY =
          this._carouselState.position.previousY;
        this._onScrollEvent();
      },
      { signal: this._abortController.signal },
    );
    
    this._contentEl.addEventListener(
      'pointermove',
      (event) => {
        event.preventDefault();
        if (!this._carouselState.position.active) {
          return;
        }
        this._carouselState.position.currentX = event.pageX;
        this._carouselState.position.currentY = event.pageY;
        this._onScrollEvent();
      },
      { signal: this._abortController.signal },
    );

    this._contentEl.addEventListener(
      'pointerleave',
      (event) => {
        event.preventDefault();
        this._carouselState.position.active = false;
      },
      { signal: this._abortController.signal },
    );
  }
}
