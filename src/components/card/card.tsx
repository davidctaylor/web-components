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
   * List is in a disabled state
   */
  @Prop() disabled = false;
  @Watch('disabled')
  disabledChanged() {}

  @Prop() elevated = true;
  @Prop() oulined = false;

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
          'card-outlined': this.oulined,
        }}
      >
        <slot></slot>
        <div class="card-content-container">
          <slot name="title"></slot>
          <slot name="content"></slot>
        </div>
      </Host>
    );
  }
}
