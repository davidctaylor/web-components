import { h, Component, Element, Host, Prop } from '@stencil/core';
import { hasSlot } from '@utils/utils';

export type ListItemType = 'link' | 'text';

/**
 * ItemHeading are elements used to describe the contents of a List or an Accordian and should only be
 * used once at the top of a List or Accordian component.
 *
 *  @slot start - Container for the optional left side icon
 *  @slot heading - Container for optional heading content
 *  @slot sub-heading - Container for optional sub-heading content
 *  @slot end - Container optional right side icon
 */
@Component({
  tag: 'dct-item-heading',
  styleUrl: './item-heading.scss',
  shadow: true,
})
export class ItemHeading {
  @Element() el!: HTMLDctItemHeadingElement;

  /**
   * ItemHeading is in a disabled state
   */
  @Prop() disabled = false;

  render() {
    return (
      <Host
        class={{
          'item-heading': true,
          disabled: this.disabled,
        }}
      >
        {hasSlot(this.el, 'start') && (
          <div class={{ icon: true, disabled: this.disabled }}>
            <slot name="start" />
          </div>
        )}
        <div class="heading">
          <slot name="heading" />
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
