import { h, Component, Element, Host, Prop } from '@stencil/core';
import { hasSlot } from '@utils/utils';

/**
 * Card Titke
 * Display content and actions about a single subject. Card contents can include anything
 * from images to headlines, supporting text, buttons, and lists
 *
 * @slot start - Container icon before title text
 * @slot slot - Container for the Title field
 * @slot sub-title - Container for the Sub-Title field
 * @slot end - Container icon after title text
 */
@Component({
  tag: 'dct-card-title',
  styleUrl: './card-title.scss',
  shadow: true,
})
export class CardTitle {
  @Element() el!: HTMLDctCardTitleElement;

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
          'card-title': true,
          disabled: this.disabled,
          overlay: this.overlay,
        }}
      >
        {hasSlot(this.el, 'start') && (
          <div class={{ icon: true, disabled: this.disabled }}>
            <slot name="start" />
          </div>
        )}
        <div class="title">
          <slot />
          <slot name="sub-title" />
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
