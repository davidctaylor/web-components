import { h, Component, Element, Host, Prop } from '@stencil/core';
import { hasSlot } from '@utils/utils';

/**
 * Card Header
 * Display content and actions about a single subject. Card contents can include anything
 * from images to headlines, supporting text, buttons, and lists
 *
 * @slot slot - Container for the Title field
 * @slot sub-heading - Container for the Sub-Title field
 */
@Component({
  tag: 'dct-card-header',
  styleUrl: './card-header.scss',
  shadow: true,
})
export class CardHeader {
  @Element() el!: HTMLDctCardHeaderElement;

  /**
   * If true, the card title is in a disabled state
   */
  @Prop() disabled = false;

  /**
   * If true, the card title will be in an overaly state. Primarily for use
   * when the parent Card is displaying an Image only allowin the title
   * to be displayed on top of the image
   */
  @Prop() overlay = false;

  render() {
    return (
      <Host
        role="heading"
        class={{
          'card-header': true,
          disabled: this.disabled,
          overlay: this.overlay,
        }}
      >
        {hasSlot(this.el, 'start') && (
          <div class={{ icon: true, disabled: this.disabled }}>
            <slot name="start" />
          </div>
        )}
        <div class="heading">
          <slot />
          <slot name="sub-heading" />
        </div>
        {hasSlot(this.el, 'end') && (
          <div class={{ icon: true, disabled: this.disabled }}>
            <slot name="end" />
          </div>
        )}
      </Host>
    );
  }
}
