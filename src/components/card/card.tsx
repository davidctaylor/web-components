import { h, Component, Prop, Element, Host, Watch } from '@stencil/core';

import { addRipple } from '@utils/index';
export type CardType = 'link' | 'text';
export type CardBorderType = 'elevated' | 'outlined' | 'none';

/**
 * Card
 * Display content and actions about a single subject. Card contents can include anything 
 * from images to headlines, supporting text, buttons, and lists
 * 
 * Cards and created from title, subtitle and content elements and have been broken into
 * multiple components to support this structure.
 *
 * @slot slot - Container for the Card's title and content
 */
@Component({
  tag: 'dct-card',
  styleUrl: './card.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class Card {
  @Element() el!: HTMLDctCardElement;

  /**
   * Card is in a disabled state. Setting this state will also set the disabled property
   * of any child components
   */
  @Prop() disabled = false;
  @Watch('disabled')
  disabledChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this._contentSlot && (this._contentSlot.disabled = this.disabled); 
      this._titleSlot && (this._titleSlot.disabled = this.disabled);
    }
  }

  /**
  * Contains a URL or URL fragment. If this property is set, card an anchor tag will be rendered
  */
  @Prop() href: string;

  /**
  * Applies when a href value is provided. It contains the target value to display the linked URL
  * Default value _blank;
  */
 
  @Prop() target: string = '_blank';

  /**
   * The Card's border style. Solid, elevated or none.
   * Default elevated, shadow style border.
   */
  @Prop() border: CardBorderType = 'elevated';

  componentDidLoad() {
    const slot: HTMLSlotElement = this.el.shadowRoot.querySelector(`slot`);
  
    this._contentSlot = slot
      .assignedElements({ flatten: true })
      .find((el) => el.tagName === 'DCT-CARD-CONTENT') as
      | HTMLDctCardContentElement
      | undefined;

    this._titleSlot = slot
      .assignedElements({ flatten: true })
      .find((el) => el.tagName === 'DCT-CARD-HEADER') as
      | HTMLDctCardHeaderElement
      | undefined;

    this._contentSlot && (this._contentSlot.disabled = this.disabled); 
    this._titleSlot && (this._titleSlot.disabled = this.disabled);

    console.log('XXX CARD', this.href);
  }

  private _contentSlot: HTMLDctCardContentElement | undefined;
  private _titleSlot: HTMLDctCardHeaderElement | undefined;

  render() {
    return (
      <Host
        class={{
          'card-container': true,
          'card-elevated': this.border === 'elevated',
          'card-outlined': this.border === 'outlined',
          disabled: this.disabled,
        }}
      >
        {this.href && (
          <a
            href={this.href}
            role="listitem"
            target={this.target}
            aria-disabled={this.disabled}
            class={{ 'card-heading': true }}
            onClick={this._onClick}
          >
            <slot></slot>
          </a>
        )}
        {!this.href && <slot></slot>}
      </Host>
    );
  }

  private _onClick = (ev: Event) => {
    ev.preventDefault();
    addRipple(this.el, ev);
  };
}
