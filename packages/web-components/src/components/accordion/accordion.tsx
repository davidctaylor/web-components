import {
  h,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  Watch,
} from '@stencil/core';
import { collapseContent, expandContent, findSlottedElement } from '@utils/utils';

/**
 * AccordionEventType
 */
export type AccordionEventType = { expaned: boolean };

export interface AccordionCustomEvent extends CustomEvent {
  detail: AccordionEventType;
  target: HTMLDctAccordionElement;
}

/**
 * Accordions provide collapsible sections in your content to reduce vertical space while providing a
 * way of organizing and grouping information.
 *
 * ### Heading element
 * Accordions require the `header` slot to be populated e.g. with the `dct-heading` component allowing
 * the display of accordion title and optional icon elements. The heading record acts a button controlling
 * expannd and collapse events.
 *
 * @slot slot - Container for the accordion content
 * @slot header - Header content is placed within an button element and is used to expand or collapse the accordion item.
 */
@Component({
  tag: 'dct-accordion',
  styleUrl: './accordion.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class Accordion {
  private static _instanceCounter = 0;

  @Element() el!: HTMLDctAccordionElement;

  /**
   * If true, the accordion is in a disabled state
   */
  @Prop() disabled = false;
  @Watch('disabled')
  disabledChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue && this._headingSlot !== undefined) {
      (this._headingSlot as HTMLDctItemHeadingElement).disabled = this.disabled;
    }
  }

  /**
   * If set to `full` or `partial`, displays a divider or separator line for the accordion
   */
  @Prop() divider: 'full' | 'partial' | 'none' = 'full';

  /**
   * If true, the accordion is in an expanded state.
   */
  @Prop({ mutable: true }) expanded = false;
  @Watch('expanded')
  expandedChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      if (newValue) {
        expandContent(
          this._contentElement,
          this._contentSlotElement.offsetHeight,
        );
        this._headingSlot &&
          (this._headingSlot.rotateIcon = true);
      } else {
        collapseContent(
          this._contentElement,
          this._contentSlotElement.offsetHeight,
        );
        this._headingSlot &&  (this._headingSlot.rotateIcon = false);
      }
    }
  }

  /**
   * Accordion expande/collapse change event emitter
   */
  @Event() accordionChange: EventEmitter<AccordionEventType>;

  private _accordionId: string;
  private _accordionHeaderId: string;
  private _contentElement!: HTMLElement;
  private _buttonElement!: HTMLButtonElement;
  private _contentSlotElement!: HTMLElement;
  private _headingSlot: HTMLDctItemHeadingElement = undefined;

  componentWillLoad() {
    Accordion._instanceCounter += 1;
    this._accordionId = `dct-accordion-${Accordion._instanceCounter}`;
    this._accordionHeaderId = `dct-accordion-header-${Accordion._instanceCounter}`;
  }

  componentDidLoad() {
    this._slottedHeadingElement();
  }

  render() {
    return (
      <Host
        role="list"
        class={{
          'accordion-container': true,
          disabled: this.disabled,
          collapsed: !this.expanded,
        }}
      >
        <button
          id={this._accordionHeaderId}
          aria-controls={this._accordionId}
          aria-expanded={this.expanded}
          aria-disabled={this.disabled}
          onClick={this._onClickHeading}
          class={{
            'accordion-heading': true,
          }}
          ref={(el) => (this._buttonElement = el)}
        >
          <slot name="heading"></slot>
        </button>
        <div
          id={this._accordionId}
          class={{ 'accordion-content': true, expanded: this.expanded }}
          role="region"
          aria-labelledby={this._accordionHeaderId}
          ref={(el) => (this._contentElement = el)}
        >
          <div
            class="accordion-content-slot"
            ref={(el) => (this._contentSlotElement = el)}
          >
            <slot></slot>
          </div>
        </div>
        <div
          class={{
            [`accordion-divider ${this.divider}`]: true,
            active: this.divider !== 'none',
          }}
        />
      </Host>
    );
  }

  private _onClickHeading = () => {
    if (this.disabled) {
      return;
    }
    this.expanded = !this.expanded;
    this.accordionChange.emit({ expaned: this.expanded });
  };

  private _slottedHeadingElement = () => {
    const heading: HTMLDctItemHeadingElement = findSlottedElement(this._buttonElement, 'heading', 'DCT-ITEM-HEADING') as HTMLDctItemHeadingElement;
    if (this._buttonElement === undefined) {
      return;
    }

    if (heading === undefined) {
      return;
    }

    const hasStartIcon = heading.shadowRoot.querySelector('slot[name="start"]');

    this._headingSlot = heading;
    if (this.disabled) {
      (this._headingSlot as HTMLDctItemHeadingElement).disabled = true;
    }

    if (hasStartIcon !== undefined && hasStartIcon !== null) {      
      this.el.classList.add('icon-start');
    }
  };
}
