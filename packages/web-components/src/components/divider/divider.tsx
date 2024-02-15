import { h, Host, Component, Prop } from '@stencil/core';

@Component({
  tag: 'dct-divider',
  styleUrl: './divider.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class Divider {
  /**
   * How the divider element displayed.
   */
  @Prop() divider: 'full' | 'partial' | 'none' = 'none';

  render() {
    return (
      <Host
        class={{ 'divider-container': true, active: this.divider !== 'none' }}
      >
        <div class={{ [`divider ${this.divider}`]: true }}></div>
      </Host>
    );
  }
}
