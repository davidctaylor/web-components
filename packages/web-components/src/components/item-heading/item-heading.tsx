import { h, Component, Element, Host, Prop, Watch } from '@stencil/core';
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
   * If true, animate the icon elementsicons in start and end slots
   */
  @Prop() animateIcons = false;

  /**
   * ItemHeading is in a disabled state
   */
  @Prop() disabled = false;

  /**
   * * If true, icon is in a rotated state
   */
  @Prop() rotateIcon = false;
  @Watch('rotateIcon')
  expandedChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this.animateIcons && newValue ? this.el.classList.add('animate-rotation') : this.el.classList.remove('animate-rotation');
    }
  }

  render() {
    return (
      <Host
        class={{
          'item-heading': true,
          disabled: this.disabled,
        }}
      >
        {hasSlot(this.el, 'start') && (
          <div class={{ icon: true, disabled: this.disabled }} >
            <slot name="start" />
          </div>
        )}
        <div class='heading'>
          <slot name='heading' />
          <slot name='sub-heading' />
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
