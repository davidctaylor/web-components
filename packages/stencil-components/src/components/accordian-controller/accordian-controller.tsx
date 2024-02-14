import {
  h,
  Component,
  Prop,
  Element,
  Host,
  Listen,
  Watch,
} from '@stencil/core';

/**
 * AccordianController
 *
 * The Accordian Controller is a container for Accordion instances. It manages the state of child Accordians allowing the following;
 *
 * - Accordians to be placed in a disabled
 * - Allowing single or multiple (all) Accordians to be expanded
 *
 * @slot - Container for all child Accordian elements.
 */
@Component({
  tag: 'dct-accordian-controller',
  shadow: {
    delegatesFocus: true,
  },
})
export class AccordianController {
  @Element() el!: HTMLDctAccordianControllerElement;

  /**
   * Places all child Accordian elements is into a disabled/enabled state
   */
  @Prop() disabled = false;
  @Watch('disabled')
  disabledChanged() {
    this._allAccordions().forEach(
      (accordian) => (accordian.disabled = this.disabled),
    );
  }

  /**
   * Allows multilple Accordian elements be in an expanded state. If set to false,
   * the first expanded Accordian element will remain expanded all subsequent
   * Accordian's will be places in a collapsed state
   */
  @Prop() displayMultiple = false;
  @Watch('displayMultiple')
  displayMultipleChanged() {
    if (this.displayMultiple) {
      return;
    }
    let foundExpanded = false;
    this._allAccordions().forEach((accordian) => {
      foundExpanded && (accordian.expanded = false);
      if (!foundExpanded) {
        foundExpanded = accordian.expanded;
      }
    });
  }

  @Listen('accordianChange')
  onAccordianChange(event: CustomEvent) {
    if (this.displayMultiple) {
      return;
    }
    const target = event.target as HTMLDctAccordianElement;

    if (this._activeElement === undefined) {
      this._activeElement = target;
      return;
    }

    if (this._activeElement !== target) {
      this._activeElement.setAttribute('expanded', 'false');
      this._activeElement = target;
    }
  }

  private _activeElement: HTMLDctAccordianElement = undefined;

  componentDidLoad() {
    if (this.disabled) {
      this.disabledChanged();
    }
    if (!this.displayMultiple) {
      this.displayMultipleChanged();
    }
  }

  render() {
    return (
      <Host
        role="presentation"
        class={{
          'accordian-controller-container': true,
          'accordian-controller-disabled': this.disabled,
          'accordian-controller-multiple': this.displayMultiple,
        }}
      >
        <slot></slot>
      </Host>
    );
  }

  private _allAccordions() {
    return Array.from(
      this.el.querySelectorAll(':scope > dct-accordian'),
    ) as HTMLDctAccordianElement[];
  }
}
