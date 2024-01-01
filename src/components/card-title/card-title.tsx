import { h, Component, Host, Prop } from '@stencil/core';

@Component({
  tag: 'dct-card-title',
  styleUrl: './card-title.scss',
  shadow: true,
})
export class CardTitle {

  @Prop() overlay = false;

  render() {
    return (
      <Host role='heading'
        class={{
          'card-title': true,
          'overlay': this.overlay,
        }}
      >
        <slot></slot>
        <slot name="sub-title" />
      </Host>
    );
  }
}
