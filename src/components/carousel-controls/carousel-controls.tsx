import { h, Component, Element, Host, Prop, Listen } from '@stencil/core';
import { CarouselEventType } from '../interfaces';
import { findSlottedElement } from '@utils/utils';

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
  @Prop({ mutable: true }) disabled = false;

  @Listen('dctButtonClick')
  onDctButtonClick(event: CustomEvent) {
    if ((event.target as HTMLElement).hasAttribute('carousel-next')) {
      this._carouselEl && this._carouselEl.navigate('next');
    } else if (
      (event.target as HTMLElement).hasAttribute('carousel-previous')
    ) {
      this._carouselEl && this._carouselEl.navigate('prev');
    }
  }

  componentWillLoad() {
    this._carouselEl = this.el.closest('dct-carousel');
    this._carouselEl && this._addEventListeners();
  }

  componentDidLoad() {
    this._previousEl = findSlottedElement(
      this.el,
      'previous',
      'DCT-BUTTON'
    ) as HTMLDctButtonElement;
    this._nextEl = findSlottedElement(
      this.el,
      'next',
      'DCT-BUTTON'
    ) as HTMLDctButtonElement;

    this._previousEl && this._previousEl.setAttribute('carousel-previous', '');
    this._nextEl && this._nextEl.setAttribute('carousel-next', '');

    this._carouselStatus &&
      this._previousEl &&
      (this._previousEl.disabled = !this._carouselStatus.hasPrevious);
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
        }}
      >
        <slot name="previous" />
        <slot name="next" />
      </Host>
    );
  }

  private _addEventListeners() {
    this._carouselEl.addEventListener(
      'carouselChange',
      (event: CustomEvent) => {
        this._carouselStatus = event.detail;
        this._previousEl &&
          (this._previousEl.disabled = !this._carouselStatus.hasPrevious);
        this._nextEl && (this._nextEl.disabled = !this._carouselStatus.hasNext);
      },
      { signal: this._abortController.signal }
    );
  }
}
