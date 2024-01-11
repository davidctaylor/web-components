import { h, Component, Element, Host, Prop } from '@stencil/core';
import { CarouselEventType } from '../interfaces/carousel';
import { addRipple } from '@utils/utils';

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

  componentWillLoad() {
    this._carouselEl = this.el.closest('dct-carousel');
    this._carouselEl.allCards().then(cards => {
      console.log('cards', cards);
    });

    this._carouselEl && this._addEventListeners();
  }

  componentDidLoad() {
  }
  
  disconnectedCallback() {
    this._abortController.abort();
  }

  private _x = 0

  private _abortController: AbortController = new AbortController();
  private _carouselEl!: HTMLDctCarouselElement;
  private _previousEl: HTMLElement;
  private _nextEl: HTMLElement

  render() {
    return (
      <Host
        class={{
        'carousel-controls': true,
      }}>
          {/* <button 
            aria-disabled={this.disabled}
            onClick={(event) => this._onClickNavigation(event, 'prev')}
            class={{
              'disabled-prev': false,
            }}
            ref={(el) => (this._previousEl = el)}>
            <slot name="previous"/>
          </button>
          <button 
            aria-disabled={this.disabled}
            onClick={(event) => this._onClickNavigation(event, 'next')}
            class={{
              'disabled-next': false,
            }}
            ref={(el) => (this._nextEl = el)}>
            <slot name="next"/>
          </button> */}
          <slot name="previous"/>
          <slot name="next"/>
      </Host>
    );
  }

  private _onClickNavigation(event: Event, direction: 'prev' | 'next') {
    addRipple(direction === 'prev' ? this._previousEl : this._nextEl, event);
    this._carouselEl && this._carouselEl.navigate(direction);
  }
  
  private _addEventListeners() {
    this._carouselEl.addEventListener('carouselChange', (event: CustomEvent) => {
      const x: CarouselEventType = event.detail;

      },
      { signal: this._abortController.signal }
    );
  }
}
