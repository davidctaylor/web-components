import { h, Component, Host } from '@stencil/core';

@Component({
  tag: 'dct-card-content',
  styleUrl: './card-content.scss',
  shadow: true,
})
export class CardContent {

  render() {
    return (
      <Host
        class={{
          'card-content': true,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
