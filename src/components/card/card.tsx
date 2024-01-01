import { h, Component, Prop, Element, Host, Watch } from '@stencil/core';

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
   * Card is in a disabled state
   */
  @Prop() disabled = false;
  @Watch('disabled')
  disabledChanged() {}

  @Prop() elevated = true;
  @Prop() outlined = false;

  /**
   * Optional list heading
   */
  @Prop() heading!: string;

  componentDidLoad() {
    if (this.disabled) {
      this.disabledChanged();
    }
  }

  render() {
    return (
      <Host
        class={{
          'card-container': true,
          disabled: this.disabled,
          'card-elevated': this.elevated,
          'card-outlined': this.outlined,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
