import { h, Component, Prop, Element, Host, Watch } from '@stencil/core';

import { addRipple, findSlottedElement } from '@utils/index';
import { ComponentBorderType } from '../interfaces';
export type CardType = 'link' | 'text';

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
   * The Card's border style. Solid, elevated or none.
   * Default elevated, shadow style border.
   */
  @Prop() border: ComponentBorderType = 'elevated';

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
   * Ripple effect enabled for card. Defult true
   */
  @Prop() ripple = true;

  /**
   * Applies when a href value is provided. It contains the target value to display the linked URL
   * Default value _blank;
   */
  @Prop() target: string = '_blank';

  componentDidLoad() {
    this._contentSlot = findSlottedElement(
      this.el,
      undefined,
      'DCT-CARD-CONTENT'
    ) as HTMLDctCardContentElement;
    this._titleSlot = findSlottedElement(
      this.el,
      undefined,
      'DCT-CARD-HEADER'
    ) as HTMLDctCardHeaderElement;
    this._contentSlot && (this._contentSlot.disabled = this.disabled);
    this._titleSlot && (this._titleSlot.disabled = this.disabled);
  }

  private _contentSlot: HTMLDctCardContentElement | undefined;
  private _titleSlot: HTMLDctCardHeaderElement | undefined;

  render() {
    return (
      <Host
        class={{
          'card-container': true,
          elevated: this.border === 'elevated',
          outlined: this.border === 'outlined',
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
            {this.ripple && <dct-ripple></dct-ripple>}
            <slot></slot>
          </a>
        )}
        {!this.href && <slot></slot>}
      </Host>
    );
  }

  private _onClick = (ev: Event) => {
    this.ripple && addRipple(this.el, ev);
  };
}
