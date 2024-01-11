import { h, Component, Element, Host, Prop, Listen } from '@stencil/core';
import { CarouselEventType } from '../interfaces/carousel';
import { findSlottedElement } from '@utils/utils';
// import { addRipple } from '@utils/utils';

@Component({
  tag: 'dct-carousel-controls',
  styleUrl: './carousel-controls.scss',
  shadow: true,
})
export class Carousel {
  @Element() el!: HTMLDctCarouselControlsElement;

  /**
   * 
   */
  @Prop({mutable: true}) disabled = false;

  @Listen('dctButtonClick')
  onDctButtonClick(event: CustomEvent) {
    console.log('XXX CLICK:', (event.target as HTMLElement));
    console.log('XXX CLICK:', (event.target as HTMLElement).getAttribute('carousel-next'));
    if ((event.target as HTMLElement).hasAttribute('carousel-next')) {
      this._carouselEl && this._carouselEl.navigate('next');
    } else if ((event.target as HTMLElement).hasAttribute('carousel-previous')) {
      this._carouselEl && this._carouselEl.navigate('prev');
    }
  }

  componentWillLoad() {
    this._carouselEl = this.el.closest('dct-carousel');
    this._carouselEl.allCards().then(cards => {
      console.log('cards', cards);
    });
    this._carouselEl && this._addEventListeners();
  }

  componentDidLoad() {
    this._previousEl = findSlottedElement(this.el, 'previous', 'DCT-BUTTON') as HTMLDctButtonElement;
    this._nextEl = findSlottedElement(this.el, 'next', 'DCT-BUTTON') as HTMLDctButtonElement;

    this._previousEl && this._previousEl.setAttribute('carousel-previous', '');
    this._nextEl  && this._nextEl.setAttribute('carousel-next', '');

    this._previousEl && console.log('XXX PREV:', (this._previousEl as HTMLElement));

    this._carouselStatus && this._previousEl && (this._previousEl.disabled = this._carouselStatus.activeIndex === 0);
  }
  
  disconnectedCallback() {
    this._abortController.abort();
  }

  private _abortController: AbortController = new AbortController();
  private _carouselEl!: HTMLDctCarouselElement;
  private _carouselStatus!: CarouselEventType;
  private _previousEl: HTMLDctButtonElement;
  private _nextEl: HTMLDctButtonElement;

  render() {
    return (
      <Host
        class={{
        'carousel-controls': true,
      }}>
          <slot name="previous"/>
          <slot name="next"/>
      </Host>
    );
  }
  
  private _addEventListeners() {
    this._carouselEl.addEventListener('carouselChange', (event: CustomEvent) => {
      this._carouselStatus = event.detail;
      console.log('XXX EVENT:', this._carouselStatus);
      this._previousEl && (this._previousEl.disabled = this._carouselStatus.activeIndex === 0);
      },
      { signal: this._abortController.signal }
    );
  }
}
