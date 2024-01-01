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
 * AccordianEventType
 */
export type AccordianEventType = { expaned: boolean };

export interface AccordianCustomEvent extends CustomEvent {
  detail: AccordianEventType;
  target: HTMLDctAccordianElement;
}

/**
 * Accordions provide collapsible sections in your content to reduce vertical space while providing a
 * way of organizing and grouping information.
 *
 * ### Heading element
 * Accordians require the `header` slot to be populated e.g. with the `dct-heading` component allowing
 * the display of accordian title and optional icon elements. The heading record acts a button controlling
 * expannd and collapse events.
 *
 * @slot header - Header content is placed within an button element and is used to expand or collapse the accordion item.
 * @slot slot - Container for the accordian content
 */
@Component({
  tag: 'dct-accordian',
  styleUrl: './accordian.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class Accordian {
  private static _instanceCounter = 0;

  @Element() el!: HTMLDctAccordianElement;

  /**
   * If true, the accordian is in a disabled state
   */
  @Prop() disabled = false;
  @Watch('disabled')
  disabledChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue && this._headingSlot) {
      (this._headingSlot as HTMLDctItemHeadingElement).disabled = this.disabled;
    }
  }

  /**
   * If set to `full` or `partial`, displays a divider or separator line for the accordian
   */
  @Prop() divider: 'full' | 'partial' | 'none' = 'full';

  /**
   * If true, the accordian is in an expanded state.
   */
  @Prop({ mutable: true }) expanded = false;
  @Watch('expanded')
  expandedChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      if (newValue) {
        expandContent(
          this._contentElement,
          this._contentSlotElement.offsetHeight
        );
        this._headingSlot &&
          (this._headingSlot.rotateIcon = true);
      } else {
        collapseContent(
          this._contentElement,
          this._contentSlotElement.offsetHeight
        );
        this._headingSlot &&  (this._headingSlot.rotateIcon = false);
      }
    }
  }

  /**
   * Accordian expande/collapse change event emitter
   */
  @Event() accordianChange: EventEmitter<AccordianEventType>;

  private _accordianId: string;
  private _accordianHeaderId: string;
  private _contentElement!: HTMLElement;
  private _buttonElement!: HTMLButtonElement;
  private _contentSlotElement!: HTMLElement;
  private _headingSlot: HTMLDctItemHeadingElement;

  componentWillLoad() {
    Accordian._instanceCounter += 1;
    this._accordianId = `dct-accordian-${Accordian._instanceCounter}`;
    this._accordianHeaderId = `dct-accordian-header-${Accordian._instanceCounter}`;
  }

  componentDidLoad() {
    this._slottedHeadingElement();
  }

  render() {
    return (
      <Host
        role="list"
        class={{
          'accordian-container': true,
          disabled: this.disabled,
          collapsed: !this.expanded,
        }}
      >
        <button
          id={this._accordianHeaderId}
          aria-controls={this._accordianId}
          aria-expanded={this.expanded}
          aria-disabled={this.disabled}
          onClick={this._onClickHeading}
          class={{
            'accordian-heading': true,
          }}
          ref={(el) => (this._buttonElement = el)}
        >
          <slot name="heading"></slot>
        </button>
        <div
          id={this._accordianId}
          class={{ 'accordian-content': true, expanded: this.expanded }}
          role="region"
          aria-labelledby={this._accordianHeaderId}
          ref={(el) => (this._contentElement = el)}
        >
          <div
            class="accordian-content-slot"
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
    this.accordianChange.emit({ expaned: this.expanded });
  };

  private _slottedHeadingElement = () => {
    const heading: HTMLDctItemHeadingElement = findSlottedElement(this._buttonElement, 'heading', 'DCT-ITEM-HEADING') as HTMLDctItemHeadingElement;
    if (!this._buttonElement) {
      return;
    }

    if (!heading) {
      return;
    }

    const hasStartIcon = heading.shadowRoot.querySelector('slot[name="start"]');

    this._headingSlot = heading;
    if (this.disabled) {
      (this._headingSlot as HTMLDctItemHeadingElement).disabled = true;
    }
    this._headingSlot.classList.add();
    if (hasStartIcon !== null) {
      this.el.classList.add('icon-start');
    }
  };
}
