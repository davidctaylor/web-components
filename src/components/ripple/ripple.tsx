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

const PADDING = 10;
const INITIAL_ORIGIN_SCALE = 0.5;

const pointerCoord = (ev: any): { x: number; y: number } => {
  // get X coordinates for either a mouse click
  // or a touch depending on the given event
  if (ev) {
    const changedTouches = ev.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    if (ev.pageX !== undefined) {
      return { x: ev.pageX, y: ev.pageY };
    }
  }
  return { x: 0, y: 0 };
};

const removeRipple = (el: HTMLElement) => {
  el.classList.add('ripple-fade-out');
  setTimeout(() => el.remove(), 200);
};

/**
 * 
 */
@Component({
  tag: 'dct-ripple',
  styleUrl: './ripple.scss',
  shadow: true,
})
export class Ripple {
  @Element() el!: HTMLElement;

  @Prop() unbounded = true;

  @Method()
  async addRipple(ev: Event) {
    return new Promise<() => void>((resolve) => {
      readTask(() => {
        const domRect: DOMRect = this.el.getBoundingClientRect();
        const { x, y } = pointerCoord(ev);

        const hypotenuse = Math.sqrt(
          domRect.width * domRect.width + domRect.height * domRect.height
        );
        const maxDim = Math.max(domRect.height, domRect.width);
        const maxRadius = this.unbounded ? maxDim : hypotenuse + PADDING;
        // const maxRadius = hypotenuse + PADDING;
        const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
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
          const elem = document.createElement("div");
          elem.classList.add('ripple-effect');
          elem.style.top = `${styleY}px`;
          elem.style.left = `${styleX}px`;
          elem.style.width = elem.style.height = `${initialSize}px`;
          elem.style.setProperty(`--scale-complete`, `${finalScale}`);
          elem.style.setProperty(`--translate-complete`, `${moveX}px, ${moveY}px`);

          const container = this.el.shadowRoot || this.el;
          container.appendChild(elem);
          setTimeout(() => {
            resolve(() => removeRipple(elem));
          }, 225 + 100);
        });
      });
    });
  }

  render() {
    return <Host role="presentation"></Host>;
  }
}


