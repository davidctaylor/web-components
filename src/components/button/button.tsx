import { h, Component, Element, Event, EventEmitter, Host, Prop } from '@stencil/core';
import { addRipple } from '@utils/utils';

@Component({
  tag: 'dct-button',
  styleUrl: './button.scss',
  shadow: true,
})
export class Button {
  @Element() el!: HTMLDctButtonElement;

  /**
   * 
   */
  @Prop() disabled = false;

  /**
   * Button event emitter
   */
  @Event() buttonClickEvent: EventEmitter<void>;

  // componentWillLoad() {
  // }

  // componentDidLoad() {
  // }
  
  // disconnectedCallback() {
  // }

  render() {
    return (
      <Host
        class={{
        'button': true,
      }}>
          <button 
            aria-disabled={this.disabled}
            onClick={(event) => this._onClick(event)}
            class={{
              disabled: false,
              icon: true,
            }}>
            <slot/>
          </button>
      </Host>
    );
  }

  private _onClick(event: Event) {
    addRipple(this.el, event);
    this.buttonClickEvent.emit();
  }
}
