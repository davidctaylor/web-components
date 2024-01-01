import { h, Component, Element, Host, Prop, Watch } from '@stencil/core';
import { hasSlot } from '@utils/utils';

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
  tag: 'dct-carousel-heading',
  styleUrl: './carousel-heading.scss',
  shadow: true,
})
export class CarouselHeading {
  @Element() el!: HTMLDctCarouselHeadingElement;

  /**
   * If true, animate the icon elements dct-item-heading icons in start and end
   */
  @Prop() animateIcons = true;

  /**
   * ItemHeading is in a disabled state
   */
  @Prop() disabled = false;

  @Prop({ mutable: true }) renderAll = false;
  @Watch('renderAll')
  openChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this.animateIcons && newValue ? this.el.classList.add('animate-render-all') : this.el.classList.remove('animate-render-all');
    }
  }

  render() {
    return (
      <Host
        class={{
          'carousel-heading': true,
          disabled: this.disabled,
        }}
      >
        <div class='heading'>
          <slot name='heading' />
          {hasSlot(this.el, 'icon') && (
            <div class={{ icon: true, disabled: this.disabled }}>
              <slot name='icon' />
            </div>
          )}
        </div>
      </Host>
    );
  }
}
