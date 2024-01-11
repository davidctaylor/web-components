import { h, Component, Element, Host, Prop } from '@stencil/core';

export type ItemType = 'content' | 'link' | 'text';

/**
 * Item are elements that can contain text, links or any other native elements and should
 * be used as rows by the List or Accordian components.
 *
 * If the Item is of type link, the Item will be defined as an anchor tag.
 *
 * @slot slot - Container for the Item's content
 */
@Component({
  tag: 'dct-item',
  styleUrl: './item.scss',
  shadow: {
    delegatesFocus: false,
  },
})
export class Item {
  @Element() el!: HTMLDctItemElement;

  /**
   * Item is in a disabled state. If of type link, click events will be disabled.
   */
  @Prop() disabled = false;

  /**
   * Determines the bottom border should be displayed if Item is not the last element in a List or According .
   */
  @Prop() separator: 'full' | 'partial' | 'none' = 'none';

  /**
   * Type of item content, link or text
   */
  @Prop() type: ItemType = 'text';

  /**
   * Used if type link. In this case the is defined as an anchor element and requires the href value
   */
  @Prop() href: string;

  /**
   * Used if type link. In this case the is defined as an anchor element and requires the target value
   * Default value _blank;
   */
  @Prop() target: string = '_blank';

  render() {
    return (
      <Host
        class={{
          'item-container': true,
          disabled: this.disabled,
        }}
      >
        {this.type === 'link' && (
          <a
            href={this.href}
            role="listitem"
            target={this.target}
            aria-disabled={this.disabled}
            class={{ 'item-heading': true }}
          >
            <slot></slot>
          </a>
        )}
        {this.type === 'text' && <slot></slot>}
        {this.type === 'content' && <slot></slot>}
        <div
          class={{
            [`item-separator ${this.separator}`]: true,
            active: this.separator !== 'none',
          }}
        />
      </Host>
    );
  }
}
