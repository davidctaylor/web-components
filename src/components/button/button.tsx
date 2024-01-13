import {
  h,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
} from '@stencil/core';
import { addRipple } from '@utils/utils';
import { ComponentBorderType } from '../interfaces';

/**
 * Button
 *
 * Basic button component with optional ripple effect.
 *
 * Work in progress!!
 *
 * * They may display text or icons.
 *
 * @slot slot - Container for the button content
 */
@Component({
  tag: 'dct-button',
  styleUrl: './button.scss',
  shadow: true,
})
export class Button {
  @Element() el!: HTMLDctButtonElement;

  /**
   * Optional aria label for button
   */
  @Prop() ariaLabel: string;

  /**
   * The Buttons's type. Default 'button'
   */
  @Prop() buttonStyle: 'default' | 'icon' = 'default';

  /**
   * The Buttons's type. Default 'button'
   */
  @Prop() buttonType: 'button' | 'reset' | 'submit' = 'button';

  /**
   * The Buttons's border style. Solid, elevated or none.
   * Default elevated, shadow style border.
   */
  @Prop() border: ComponentBorderType = 'none';

  /**
   * Button in an disabled state. Default false.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Ripple effect enabled for button. Defult true
   */
  @Prop() ripple = true;

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
          elevated: this.border === 'elevated',
          outlined: this.border === 'outlined',
          icon: this.buttonStyle === 'icon',
        }}
      >
        <button
          disabled={this.disabled}
          aria-disabled={this.disabled}
          aria-label={this.ariaLabel}
          type={this.buttonType}
          onClick={(event) => this._onClick(event)}
        >
          <slot />
          {this.ripple && <dct-ripple></dct-ripple>}
        </button>
      </Host>
    );
  }

  private _onClick(event: Event) {
    this.ripple && addRipple(this.el, event);
    this.dctButtonClick.emit();
  }
}
