import { h, Component, Prop, Element, Host, Watch } from '@stencil/core';

@Component({
  tag: 'dct-list',
  styleUrl: './list.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class List {
  @Element() el!: HTMLDctListElement;

  /**
   * List is in a disabled state
   */
  @Prop() disabled = false;
  @Watch('disabled')
  disabledChanged() {
    this._allListItems().forEach(
      (accordian) => (accordian.disabled = this.disabled),
    );
  }

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
        role="list"
        class={{
          'list-container': true,
          disabled: this.disabled,
        }}
      >
        {this.heading && (
          <div class={{ 'list-heading': true }}>{this.heading}</div>
        )}

        <slot></slot>
      </Host>
    );
  }

  private _allListItems() {
    return Array.from(
      this.el.querySelectorAll(':scope > dct-item'),
    ) as HTMLDctItemElement[];
  }
}
