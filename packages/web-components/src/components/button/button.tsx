import {
  h,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
} from '@stencil/core';
import { addRipple, hasSlot } from '@utils/utils';

/**
 * Button
 *
 * Basic button component with optional ripple effect.
 *
 * Work in progress!!
 *
 * * They may display text or icons.
 * @slot start - Container icon before button text
 * @slot slot - Container for the button content
 * @slot end - Container icon after title text
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
  @Prop() buttonStyle: 'elevated' | 'filled' | 'outlined' | 'text' = 'outlined';

  /**
   * The Buttons's type. Default 'button'
   */
  @Prop() buttonType: 'button' | 'reset' | 'submit' = 'button';

  /**
   * The Buttons's type. Default 'button'
   */
  @Prop() buttonColor: 'primary' | 'secondary' = 'primary';

  /**
   * Is button for display of icons only. Default false
   */
  @Prop() iconButton = false;

  /**
   * Button in an disabled state. Default false.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Ripple effect enabled for button. Defult false
   */
  @Prop() ripple = false;

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
          elevated: this.buttonStyle === 'elevated',
          filled: this.buttonStyle === 'filled',
          outlined: this.buttonStyle === 'outlined',
          text: this.buttonStyle === 'text',
          icon: this.iconButton,
          primary: this.buttonColor === 'primary',
          secondary: this.buttonColor === 'secondary',
        }}
      >
        <button
          disabled={this.disabled}
          aria-disabled={this.disabled}
          aria-label={this.ariaLabel}
          type={this.buttonType}
          onClick={(event) => this._onClick(event)}
        >
          <span class="button-content">
            {hasSlot(this.el, 'start') && (
              <span class={{ icon: true, disabled: this.disabled }}>
                <slot name="start" />
              </span>
            )}
            <slot />
            {hasSlot(this.el, 'end') && (
              <span class={{ icon: true, disabled: this.disabled }}>
                <slot name="end" />
              </span>
            )}
          </span>
          <span class="button-status"></span>

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
