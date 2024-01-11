import { h, Component, Element, Event, EventEmitter, Host, Prop, Watch } from '@stencil/core';
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
  @Prop({ reflect: true }) disabled = false;

  /**
   * Button event emitter
   */
  @Event() dctButtonClick: EventEmitter<void>;

  render() {
    return (
      <Host
        class={{
        'button-container': true,
        disabled: this.disabled,
        icon: true,
      }}>
          <button 
            aria-disabled={this.disabled}
            onClick={(event) => this._onClick(event)}>
            <slot/>
            <dct-ripple></dct-ripple>
          </button>
      </Host>
    );
  }

  private _onClick(event: Event) {
    addRipple(this.el, event);
    this.dctButtonClick.emit();
  }
}
