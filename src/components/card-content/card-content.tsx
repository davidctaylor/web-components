import { h, Component, Host, Prop } from '@stencil/core';

/**
 * Card Content
 * Display content and actions about a single subject. Card contents can include anything 
 * from images to headlines, supporting text, buttons, and lists
 *
 * @slot slot - Container for card content
 */
@Component({
  tag: 'dct-card-content',
  styleUrl: './card-content.scss',
  shadow: true,
})
export class CardContent {

  @Prop({ mutable: true }) disabled = false;

  render() {
    return (
      <Host
        class={{
          'card-content': true,
          disabled: this.disabled
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
