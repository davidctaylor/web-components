/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AccordianEventType } from "./components/accordian/accordian";
import { ItemType } from "./components/item/item";
export { AccordianEventType } from "./components/accordian/accordian";
export { ItemType } from "./components/item/item";
export namespace Components {
    /**
     * Accordions provide collapsible sections in your content to reduce vertical space while providing a
     * way of organizing and grouping information.
     * ### Heading element
     * Accordians require the `header` slot to be populated e.g. with the `dct-heading` component allowing
     * the display of accordian title and optional icon elements. The heading record acts a button controlling
     * expannd and collapse events.
     */
    interface DctAccordian {
        /**
          * If true, animate the icon elements dct-item-heading icons in start and end
         */
        "animateIcons": boolean;
        /**
          * If true, the accordian is in a disabled state
         */
        "disabled": boolean;
        /**
          * If set to `full` or `partial`, displays a divider or separator line for the accordian
         */
        "divider": 'full' | 'partial' | 'none';
        /**
          * If true, the accordian is in an expanded state.
         */
        "expanded": boolean;
    }
    /**
     * AccordianController
     * The Accordian Controller is a container for Accordion instances. It manages the state of child Accordians allowing the following;
     * - Accordians to be placed in a disabled
     * - Allowing single or multiple (all) Accordians to be expanded
     */
    interface DctAccordianController {
        /**
          * Places all child Accordian elements is into a disabled/enabled state
         */
        "disabled": boolean;
        /**
          * Allows multilple Accordian elements be in an expanded state. If set to false, the first expanded Accordian element will remain expanded all subsequent Accordian's will be places in a collapsed state
         */
        "displayMultiple": boolean;
    }
    interface DctDivider {
        /**
          * How the divider element displayed.
         */
        "divider": 'full' | 'partial' | 'none';
    }
    /**
     * Item are elements that can contain text, links or any other native elements and should
     * be used as rows by the List or Accordian components.
     * If the Item is of type link, the Item will be defined as an anchor tag.
     */
    interface DctItem {
        /**
          * Item is in a disabled state. If of type link, click events will be disabled.
         */
        "disabled": boolean;
        /**
          * Used if type link. In this case the is defined as an anchor element and requires the href value
         */
        "href": string;
        /**
          * Determines the bottom border should be displayed if Item is not the last element in a List or According .
         */
        "separator": 'full' | 'partial' | 'none';
        /**
          * Used if type link. In this case the is defined as an anchor element and requires the target value
         */
        "target": string;
        /**
          * Type of item content, link or text
         */
        "type": ItemType;
    }
    /**
     * ItemHeading are elements used to describe the contents of a List or an Accordian and should only be
     * used once at the top of a List or Accordian component.
     */
    interface DctItemHeading {
        /**
          * ItemHeading is in a disabled state
         */
        "disabled": boolean;
    }
    interface DctList {
        /**
          * List is in a disabled state
         */
        "disabled": boolean;
        /**
          * Optional list heading
         */
        "heading": string;
    }
}
export interface DctAccordianCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDctAccordianElement;
}
declare global {
    interface HTMLDctAccordianElementEventMap {
        "accordianChange": AccordianEventType;
    }
    /**
     * Accordions provide collapsible sections in your content to reduce vertical space while providing a
     * way of organizing and grouping information.
     * ### Heading element
     * Accordians require the `header` slot to be populated e.g. with the `dct-heading` component allowing
     * the display of accordian title and optional icon elements. The heading record acts a button controlling
     * expannd and collapse events.
     */
    interface HTMLDctAccordianElement extends Components.DctAccordian, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDctAccordianElementEventMap>(type: K, listener: (this: HTMLDctAccordianElement, ev: DctAccordianCustomEvent<HTMLDctAccordianElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDctAccordianElementEventMap>(type: K, listener: (this: HTMLDctAccordianElement, ev: DctAccordianCustomEvent<HTMLDctAccordianElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDctAccordianElement: {
        prototype: HTMLDctAccordianElement;
        new (): HTMLDctAccordianElement;
    };
    /**
     * AccordianController
     * The Accordian Controller is a container for Accordion instances. It manages the state of child Accordians allowing the following;
     * - Accordians to be placed in a disabled
     * - Allowing single or multiple (all) Accordians to be expanded
     */
    interface HTMLDctAccordianControllerElement extends Components.DctAccordianController, HTMLStencilElement {
    }
    var HTMLDctAccordianControllerElement: {
        prototype: HTMLDctAccordianControllerElement;
        new (): HTMLDctAccordianControllerElement;
    };
    interface HTMLDctDividerElement extends Components.DctDivider, HTMLStencilElement {
    }
    var HTMLDctDividerElement: {
        prototype: HTMLDctDividerElement;
        new (): HTMLDctDividerElement;
    };
    /**
     * Item are elements that can contain text, links or any other native elements and should
     * be used as rows by the List or Accordian components.
     * If the Item is of type link, the Item will be defined as an anchor tag.
     */
    interface HTMLDctItemElement extends Components.DctItem, HTMLStencilElement {
    }
    var HTMLDctItemElement: {
        prototype: HTMLDctItemElement;
        new (): HTMLDctItemElement;
    };
    /**
     * ItemHeading are elements used to describe the contents of a List or an Accordian and should only be
     * used once at the top of a List or Accordian component.
     */
    interface HTMLDctItemHeadingElement extends Components.DctItemHeading, HTMLStencilElement {
    }
    var HTMLDctItemHeadingElement: {
        prototype: HTMLDctItemHeadingElement;
        new (): HTMLDctItemHeadingElement;
    };
    interface HTMLDctListElement extends Components.DctList, HTMLStencilElement {
    }
    var HTMLDctListElement: {
        prototype: HTMLDctListElement;
        new (): HTMLDctListElement;
    };
    interface HTMLElementTagNameMap {
        "dct-accordian": HTMLDctAccordianElement;
        "dct-accordian-controller": HTMLDctAccordianControllerElement;
        "dct-divider": HTMLDctDividerElement;
        "dct-item": HTMLDctItemElement;
        "dct-item-heading": HTMLDctItemHeadingElement;
        "dct-list": HTMLDctListElement;
    }
}
declare namespace LocalJSX {
    /**
     * Accordions provide collapsible sections in your content to reduce vertical space while providing a
     * way of organizing and grouping information.
     * ### Heading element
     * Accordians require the `header` slot to be populated e.g. with the `dct-heading` component allowing
     * the display of accordian title and optional icon elements. The heading record acts a button controlling
     * expannd and collapse events.
     */
    interface DctAccordian {
        /**
          * If true, animate the icon elements dct-item-heading icons in start and end
         */
        "animateIcons"?: boolean;
        /**
          * If true, the accordian is in a disabled state
         */
        "disabled"?: boolean;
        /**
          * If set to `full` or `partial`, displays a divider or separator line for the accordian
         */
        "divider"?: 'full' | 'partial' | 'none';
        /**
          * If true, the accordian is in an expanded state.
         */
        "expanded"?: boolean;
        /**
          * Accordian expande/collapse change event emitter
         */
        "onAccordianChange"?: (event: DctAccordianCustomEvent<AccordianEventType>) => void;
    }
    /**
     * AccordianController
     * The Accordian Controller is a container for Accordion instances. It manages the state of child Accordians allowing the following;
     * - Accordians to be placed in a disabled
     * - Allowing single or multiple (all) Accordians to be expanded
     */
    interface DctAccordianController {
        /**
          * Places all child Accordian elements is into a disabled/enabled state
         */
        "disabled"?: boolean;
        /**
          * Allows multilple Accordian elements be in an expanded state. If set to false, the first expanded Accordian element will remain expanded all subsequent Accordian's will be places in a collapsed state
         */
        "displayMultiple"?: boolean;
    }
    interface DctDivider {
        /**
          * How the divider element displayed.
         */
        "divider"?: 'full' | 'partial' | 'none';
    }
    /**
     * Item are elements that can contain text, links or any other native elements and should
     * be used as rows by the List or Accordian components.
     * If the Item is of type link, the Item will be defined as an anchor tag.
     */
    interface DctItem {
        /**
          * Item is in a disabled state. If of type link, click events will be disabled.
         */
        "disabled"?: boolean;
        /**
          * Used if type link. In this case the is defined as an anchor element and requires the href value
         */
        "href"?: string;
        /**
          * Determines the bottom border should be displayed if Item is not the last element in a List or According .
         */
        "separator"?: 'full' | 'partial' | 'none';
        /**
          * Used if type link. In this case the is defined as an anchor element and requires the target value
         */
        "target"?: string;
        /**
          * Type of item content, link or text
         */
        "type"?: ItemType;
    }
    /**
     * ItemHeading are elements used to describe the contents of a List or an Accordian and should only be
     * used once at the top of a List or Accordian component.
     */
    interface DctItemHeading {
        /**
          * ItemHeading is in a disabled state
         */
        "disabled"?: boolean;
    }
    interface DctList {
        /**
          * List is in a disabled state
         */
        "disabled"?: boolean;
        /**
          * Optional list heading
         */
        "heading": string;
    }
    interface IntrinsicElements {
        "dct-accordian": DctAccordian;
        "dct-accordian-controller": DctAccordianController;
        "dct-divider": DctDivider;
        "dct-item": DctItem;
        "dct-item-heading": DctItemHeading;
        "dct-list": DctList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            /**
             * Accordions provide collapsible sections in your content to reduce vertical space while providing a
             * way of organizing and grouping information.
             * ### Heading element
             * Accordians require the `header` slot to be populated e.g. with the `dct-heading` component allowing
             * the display of accordian title and optional icon elements. The heading record acts a button controlling
             * expannd and collapse events.
             */
            "dct-accordian": LocalJSX.DctAccordian & JSXBase.HTMLAttributes<HTMLDctAccordianElement>;
            /**
             * AccordianController
             * The Accordian Controller is a container for Accordion instances. It manages the state of child Accordians allowing the following;
             * - Accordians to be placed in a disabled
             * - Allowing single or multiple (all) Accordians to be expanded
             */
            "dct-accordian-controller": LocalJSX.DctAccordianController & JSXBase.HTMLAttributes<HTMLDctAccordianControllerElement>;
            "dct-divider": LocalJSX.DctDivider & JSXBase.HTMLAttributes<HTMLDctDividerElement>;
            /**
             * Item are elements that can contain text, links or any other native elements and should
             * be used as rows by the List or Accordian components.
             * If the Item is of type link, the Item will be defined as an anchor tag.
             */
            "dct-item": LocalJSX.DctItem & JSXBase.HTMLAttributes<HTMLDctItemElement>;
            /**
             * ItemHeading are elements used to describe the contents of a List or an Accordian and should only be
             * used once at the top of a List or Accordian component.
             */
            "dct-item-heading": LocalJSX.DctItemHeading & JSXBase.HTMLAttributes<HTMLDctItemHeadingElement>;
            "dct-list": LocalJSX.DctList & JSXBase.HTMLAttributes<HTMLDctListElement>;
        }
    }
}
