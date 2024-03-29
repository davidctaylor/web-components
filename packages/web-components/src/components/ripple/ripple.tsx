import {
  h,
  Component,
  Element,
  Host,
  Method,
  writeTask,
  readTask,
  Prop,
} from '@stencil/core';
import { pointerCoord } from '@utils/utils';

const RIPPLE_PADDING = 10;
const RIPPLE_ORIGIN_SCALE = 0.5;

/**
 *
 */
@Component({
  tag: 'dct-ripple',
  styleUrl: './ripple.scss',
  shadow: true,
})
export class Ripple {
  @Element() el!: HTMLDctRippleElement;

  /**
   * 
   */
  @Prop() unbounded = false;

  /**
   * Add ripple effect to parent element
   */
  @Method()
  async addRipple(ev: Event) {
    return new Promise<() => void>((resolve) => {
      readTask(() => {
        const domRect: DOMRect = this.el.getBoundingClientRect();
        const { x, y } = pointerCoord(ev);

        const hypotenuse = Math.sqrt(
          domRect.width * domRect.width + domRect.height * domRect.height,
        );
        const maxDim = Math.max(domRect.height, domRect.width);
        const maxRadius = this.unbounded ? maxDim : hypotenuse + RIPPLE_PADDING;
        // const maxRadius = hypotenuse + PADDING;
        const initialSize = Math.floor(maxDim * RIPPLE_ORIGIN_SCALE);
        const finalScale = maxRadius / initialSize;
        let posX = x - domRect.left;
        let posY = y - domRect.top;
        if (this.unbounded) {
          posX = domRect.width * 0.5;
          posY = domRect.height * 0.5;
        }
        const styleX = posX - initialSize * 0.5;
        const styleY = posY - initialSize * 0.5;
        const moveX = domRect.width * 0.5 - posX;
        const moveY = domRect.height * 0.5 - posY;

        writeTask(() => {
          const elem = document.createElement('div');
          elem.classList.add('ripple-effect');
          elem.style.top = `${styleY}px`;
          elem.style.left = `${styleX}px`;
          elem.style.width = elem.style.height = `${initialSize}px`;
          elem.style.setProperty(`--scale-complete`, `${finalScale}`);
          elem.style.setProperty(
            `--translate-complete`,
            `${moveX}px, ${moveY}px`,
          );

          const container = this.el.shadowRoot || this.el;
          container.appendChild(elem);
          setTimeout(() => {
            resolve(() => this._removeRipple(elem));
          }, 225 + 100);
        });
      });
    });
  }

  render() {
    return <Host role="presentation"></Host>;
  }

  private _removeRipple = (el: HTMLElement) => {
    el.classList.add('ripple-fade-out');
    setTimeout(() => el.remove(), 200);
  };
}
