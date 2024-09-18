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
 * AccordionController
 *
 * The Accordion Controller is a container for Accordion instances. It manages the state of child Accordions allowing the following;
 *
 * - Accordions to be placed in a disabled
 * - Allowing single or multiple (all) Accordions to be expanded
 *
 * @slot - Container for all child Accordipn elements.
 */
@Component({
  tag: 'dct-accordion-controller',
  shadow: {
    delegatesFocus: true,
  },
})
export class AccordionController {
  @Element() el!: HTMLDctAccordionControllerElement;

  /**
   * Places all child Accordion elements is into a disabled/enabled state
   */
  @Prop() disabled = false;
  @Watch('disabled')
  disabledChanged() {
    this._allAccordions().forEach(
      (accordion) => (accordion.disabled = this.disabled),
    );
  }

  /**
   * Allows multilple Accordion elements be in an expanded state. If set to false,
   * the first expanded Accordion element will remain expanded all subsequent
   * Accordion's will be places in a collapsed state
   */
  @Prop() displayMultiple = false;
  @Watch('displayMultiple')
  displayMultipleChanged() {
    if (this.displayMultiple) {
      return;
    }
    let foundExpanded = false;
    this._allAccordions().forEach((accordion) => {
      foundExpanded && (accordion.expanded = false);
      if (!foundExpanded) {
        foundExpanded = accordion.expanded;
      }
    });
  }

  @Listen('accordionChange')
  onAccordionChange(event: CustomEvent) {
    if (this.displayMultiple) {
      return;
    }
    const target = event.target as HTMLDctAccordionElement;

    if (this._activeElement === undefined) {
      this._activeElement = target;
      return;
    }

    if (this._activeElement !== target) {
      this._activeElement.setAttribute('expanded', 'false');
      this._activeElement = target;
    }
  }

  private _activeElement: HTMLDctAccordionElement = undefined;

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
          'accordion-controller-container': true,
          'accordion-controller-disabled': this.disabled,
          'accordion-controller-multiple': this.displayMultiple,
        }}
      >
        <slot></slot>
      </Host>
    );
  }

  private _allAccordions() {
    return Array.from(
      this.el.querySelectorAll(':scope > dct-accordion'),
    ) as HTMLDctAccordionElement[];
  }
}
