/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AccordianEventType } from "./components/accordian/accordian";
import { CarouselCardEventType, CarouselEventType, ComponentBorderType } from "./components/interfaces";
import { ItemType } from "./components/item/item";
export { AccordianEventType } from "./components/accordian/accordian";
export { CarouselCardEventType, CarouselEventType, ComponentBorderType } from "./components/interfaces";
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
    /**
     * Button
     * Basic button component with optional ripple effect. They may display
     * text or icons.
     */
    interface DctButton {
        /**
          * Optional aria label for button
         */
        "ariaLabel": string;
        /**
          * The Buttons's border style. Solid, elevated or none. Default elevated, shadow style border.
         */
        "border": ComponentBorderType;
        /**
          * The Buttons's type. Default 'button'
         */
        "buttonStyle": 'default' | 'icon';
        /**
          * The Buttons's type. Default 'button'
         */
        "buttonType": 'button' | 'reset' | 'submit';
        /**
          * Button in an disabled state. Default false.
         */
        "disabled": boolean;
        /**
          * Ripple effect enabled for button. Defult true
         */
        "ripple": boolean;
    }
    /**
     * Card
     * Display content and actions about a single subject. Card contents can include anything
     * from images to headlines, supporting text, buttons, and lists
     * Cards and created from title, subtitle and content elements and have been broken into
     * multiple components to support this structure.
     */
    interface DctCard {
        /**
          * The Card's border style. Solid, elevated or none. Default elevated, shadow style border.
         */
        "border": ComponentBorderType;
        /**
          * Card is in a disabled state. Setting this state will also set the disabled property of any child components
         */
        "disabled": boolean;
        /**
          * Contains a URL or URL fragment. If this property is set, card an anchor tag will be rendered
         */
        "href": string;
        /**
          * Ripple effect enabled for card. Defult true
         */
        "ripple": boolean;
        /**
          * Applies when a href value is provided. It contains the target value to display the linked URL Default value _blank;
         */
        "target": string;
    }
    /**
     * Card Content
     * Display content and actions about a single subject. Card contents can include anything
     * from images to headlines, supporting text, buttons, and lists
     */
    interface DctCardContent {
        "disabled": boolean;
    }
    /**
     * Card Header
     * Display content and actions about a single subject. Card contents can include anything
     * from images to headlines, supporting text, buttons, and lists
     */
    interface DctCardHeader {
        /**
          * If true, the card title is in a disabled state
         */
        "disabled": boolean;
        /**
          * If true, the card title will be in an overaly state. Primarily for use when the parent Card is displaying an Image only allowin the title to be displayed on top of the image
         */
        "overlay": boolean;
    }
    /**
     * Carousel's show a collection of items that can be scrolled on and off the screen and have the
     * follwowing features
     * * Contain visual items like images or video, along with optional label text
     * * Items change size as they move through the carousel with small leading/trailing items indicating that there is more content available
     * * Optional controls on the top left or bottom right allow the Carousel to display all content using full screen  grid layout
     */
    interface DctCarousel {
        "disabled": boolean;
        /**
          * Optional text to display in Carousels footer element determine if all carousel cards are visible
         */
        "footerText": string;
        /**
          * Optional text to display in Carousels header element determine if all carousel cards are visible
         */
        "headerText": string;
        "navigate": (direction: 'prev' | 'next') => Promise<void>;
        /**
          * If true, the carousel is in an render all state and all Carousel cards will be displayed in a grid layout
         */
        "renderAll": boolean;
    }
    interface DctCarouselControls {
        "disabled": boolean;
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
          * Used if type link. In this case the is defined as an anchor element and requires the target value Default value _blank;
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
          * If true, animate the icon elementsicons in start and end slots
         */
        "animateIcons": boolean;
        /**
          * ItemHeading is in a disabled state
         */
        "disabled": boolean;
        /**
          * * If true, icon is in a rotated state
         */
        "rotateIcon": boolean;
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
    interface DctRipple {
        "addRipple": (ev: Event) => Promise<() => void>;
        "unbounded": boolean;
    }
}
export interface DctAccordianCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDctAccordianElement;
}
export interface DctButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDctButtonElement;
}
export interface DctCarouselCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDctCarouselElement;
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
    interface HTMLDctButtonElementEventMap {
        "dctButtonClick": void;
    }
    /**
     * Button
     * Basic button component with optional ripple effect. They may display
     * text or icons.
     */
    interface HTMLDctButtonElement extends Components.DctButton, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDctButtonElementEventMap>(type: K, listener: (this: HTMLDctButtonElement, ev: DctButtonCustomEvent<HTMLDctButtonElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDctButtonElementEventMap>(type: K, listener: (this: HTMLDctButtonElement, ev: DctButtonCustomEvent<HTMLDctButtonElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDctButtonElement: {
        prototype: HTMLDctButtonElement;
        new (): HTMLDctButtonElement;
    };
    /**
     * Card
     * Display content and actions about a single subject. Card contents can include anything
     * from images to headlines, supporting text, buttons, and lists
     * Cards and created from title, subtitle and content elements and have been broken into
     * multiple components to support this structure.
     */
    interface HTMLDctCardElement extends Components.DctCard, HTMLStencilElement {
    }
    var HTMLDctCardElement: {
        prototype: HTMLDctCardElement;
        new (): HTMLDctCardElement;
    };
    /**
     * Card Content
     * Display content and actions about a single subject. Card contents can include anything
     * from images to headlines, supporting text, buttons, and lists
     */
    interface HTMLDctCardContentElement extends Components.DctCardContent, HTMLStencilElement {
    }
    var HTMLDctCardContentElement: {
        prototype: HTMLDctCardContentElement;
        new (): HTMLDctCardContentElement;
    };
    /**
     * Card Header
     * Display content and actions about a single subject. Card contents can include anything
     * from images to headlines, supporting text, buttons, and lists
     */
    interface HTMLDctCardHeaderElement extends Components.DctCardHeader, HTMLStencilElement {
    }
    var HTMLDctCardHeaderElement: {
        prototype: HTMLDctCardHeaderElement;
        new (): HTMLDctCardHeaderElement;
    };
    interface HTMLDctCarouselElementEventMap {
        "carouselChange": CarouselEventType;
        "carouselCardChange": CarouselCardEventType;
    }
    /**
     * Carousel's show a collection of items that can be scrolled on and off the screen and have the
     * follwowing features
     * * Contain visual items like images or video, along with optional label text
     * * Items change size as they move through the carousel with small leading/trailing items indicating that there is more content available
     * * Optional controls on the top left or bottom right allow the Carousel to display all content using full screen  grid layout
     */
    interface HTMLDctCarouselElement extends Components.DctCarousel, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDctCarouselElementEventMap>(type: K, listener: (this: HTMLDctCarouselElement, ev: DctCarouselCustomEvent<HTMLDctCarouselElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDctCarouselElementEventMap>(type: K, listener: (this: HTMLDctCarouselElement, ev: DctCarouselCustomEvent<HTMLDctCarouselElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDctCarouselElement: {
        prototype: HTMLDctCarouselElement;
        new (): HTMLDctCarouselElement;
    };
    interface HTMLDctCarouselControlsElement extends Components.DctCarouselControls, HTMLStencilElement {
    }
    var HTMLDctCarouselControlsElement: {
        prototype: HTMLDctCarouselControlsElement;
        new (): HTMLDctCarouselControlsElement;
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
    interface HTMLDctRippleElement extends Components.DctRipple, HTMLStencilElement {
    }
    var HTMLDctRippleElement: {
        prototype: HTMLDctRippleElement;
        new (): HTMLDctRippleElement;
    };
    interface HTMLElementTagNameMap {
        "dct-accordian": HTMLDctAccordianElement;
        "dct-accordian-controller": HTMLDctAccordianControllerElement;
        "dct-button": HTMLDctButtonElement;
        "dct-card": HTMLDctCardElement;
        "dct-card-content": HTMLDctCardContentElement;
        "dct-card-header": HTMLDctCardHeaderElement;
        "dct-carousel": HTMLDctCarouselElement;
        "dct-carousel-controls": HTMLDctCarouselControlsElement;
        "dct-divider": HTMLDctDividerElement;
        "dct-item": HTMLDctItemElement;
        "dct-item-heading": HTMLDctItemHeadingElement;
        "dct-list": HTMLDctListElement;
        "dct-ripple": HTMLDctRippleElement;
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
    /**
     * Button
     * Basic button component with optional ripple effect. They may display
     * text or icons.
     */
    interface DctButton {
        /**
          * Optional aria label for button
         */
        "ariaLabel"?: string;
        /**
          * The Buttons's border style. Solid, elevated or none. Default elevated, shadow style border.
         */
        "border"?: ComponentBorderType;
        /**
          * The Buttons's type. Default 'button'
         */
        "buttonStyle"?: 'default' | 'icon';
        /**
          * The Buttons's type. Default 'button'
         */
        "buttonType"?: 'button' | 'reset' | 'submit';
        /**
          * Button in an disabled state. Default false.
         */
        "disabled"?: boolean;
        /**
          * Button event emitter
         */
        "onDctButtonClick"?: (event: DctButtonCustomEvent<void>) => void;
        /**
          * Ripple effect enabled for button. Defult true
         */
        "ripple"?: boolean;
    }
    /**
     * Card
     * Display content and actions about a single subject. Card contents can include anything
     * from images to headlines, supporting text, buttons, and lists
     * Cards and created from title, subtitle and content elements and have been broken into
     * multiple components to support this structure.
     */
    interface DctCard {
        /**
          * The Card's border style. Solid, elevated or none. Default elevated, shadow style border.
         */
        "border"?: ComponentBorderType;
        /**
          * Card is in a disabled state. Setting this state will also set the disabled property of any child components
         */
        "disabled"?: boolean;
        /**
          * Contains a URL or URL fragment. If this property is set, card an anchor tag will be rendered
         */
        "href"?: string;
        /**
          * Ripple effect enabled for card. Defult true
         */
        "ripple"?: boolean;
        /**
          * Applies when a href value is provided. It contains the target value to display the linked URL Default value _blank;
         */
        "target"?: string;
    }
    /**
     * Card Content
     * Display content and actions about a single subject. Card contents can include anything
     * from images to headlines, supporting text, buttons, and lists
     */
    interface DctCardContent {
        "disabled"?: boolean;
    }
    /**
     * Card Header
     * Display content and actions about a single subject. Card contents can include anything
     * from images to headlines, supporting text, buttons, and lists
     */
    interface DctCardHeader {
        /**
          * If true, the card title is in a disabled state
         */
        "disabled"?: boolean;
        /**
          * If true, the card title will be in an overaly state. Primarily for use when the parent Card is displaying an Image only allowin the title to be displayed on top of the image
         */
        "overlay"?: boolean;
    }
    /**
     * Carousel's show a collection of items that can be scrolled on and off the screen and have the
     * follwowing features
     * * Contain visual items like images or video, along with optional label text
     * * Items change size as they move through the carousel with small leading/trailing items indicating that there is more content available
     * * Optional controls on the top left or bottom right allow the Carousel to display all content using full screen  grid layout
     */
    interface DctCarousel {
        "disabled"?: boolean;
        /**
          * Optional text to display in Carousels footer element determine if all carousel cards are visible
         */
        "footerText"?: string;
        /**
          * Optional text to display in Carousels header element determine if all carousel cards are visible
         */
        "headerText"?: string;
        /**
          * Carousel card change event
         */
        "onCarouselCardChange"?: (event: DctCarouselCustomEvent<CarouselCardEventType>) => void;
        /**
          * Carousel change event emitter
         */
        "onCarouselChange"?: (event: DctCarouselCustomEvent<CarouselEventType>) => void;
        /**
          * If true, the carousel is in an render all state and all Carousel cards will be displayed in a grid layout
         */
        "renderAll"?: boolean;
    }
    interface DctCarouselControls {
        "disabled"?: boolean;
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
          * Used if type link. In this case the is defined as an anchor element and requires the target value Default value _blank;
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
          * If true, animate the icon elementsicons in start and end slots
         */
        "animateIcons"?: boolean;
        /**
          * ItemHeading is in a disabled state
         */
        "disabled"?: boolean;
        /**
          * * If true, icon is in a rotated state
         */
        "rotateIcon"?: boolean;
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
    interface DctRipple {
        "unbounded"?: boolean;
    }
    interface IntrinsicElements {
        "dct-accordian": DctAccordian;
        "dct-accordian-controller": DctAccordianController;
        "dct-button": DctButton;
        "dct-card": DctCard;
        "dct-card-content": DctCardContent;
        "dct-card-header": DctCardHeader;
        "dct-carousel": DctCarousel;
        "dct-carousel-controls": DctCarouselControls;
        "dct-divider": DctDivider;
        "dct-item": DctItem;
        "dct-item-heading": DctItemHeading;
        "dct-list": DctList;
        "dct-ripple": DctRipple;
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
            /**
             * Button
             * Basic button component with optional ripple effect. They may display
             * text or icons.
             */
            "dct-button": LocalJSX.DctButton & JSXBase.HTMLAttributes<HTMLDctButtonElement>;
            /**
             * Card
             * Display content and actions about a single subject. Card contents can include anything
             * from images to headlines, supporting text, buttons, and lists
             * Cards and created from title, subtitle and content elements and have been broken into
             * multiple components to support this structure.
             */
            "dct-card": LocalJSX.DctCard & JSXBase.HTMLAttributes<HTMLDctCardElement>;
            /**
             * Card Content
             * Display content and actions about a single subject. Card contents can include anything
             * from images to headlines, supporting text, buttons, and lists
             */
            "dct-card-content": LocalJSX.DctCardContent & JSXBase.HTMLAttributes<HTMLDctCardContentElement>;
            /**
             * Card Header
             * Display content and actions about a single subject. Card contents can include anything
             * from images to headlines, supporting text, buttons, and lists
             */
            "dct-card-header": LocalJSX.DctCardHeader & JSXBase.HTMLAttributes<HTMLDctCardHeaderElement>;
            /**
             * Carousel's show a collection of items that can be scrolled on and off the screen and have the
             * follwowing features
             * * Contain visual items like images or video, along with optional label text
             * * Items change size as they move through the carousel with small leading/trailing items indicating that there is more content available
             * * Optional controls on the top left or bottom right allow the Carousel to display all content using full screen  grid layout
             */
            "dct-carousel": LocalJSX.DctCarousel & JSXBase.HTMLAttributes<HTMLDctCarouselElement>;
            "dct-carousel-controls": LocalJSX.DctCarouselControls & JSXBase.HTMLAttributes<HTMLDctCarouselControlsElement>;
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
            "dct-ripple": LocalJSX.DctRipple & JSXBase.HTMLAttributes<HTMLDctRippleElement>;
        }
    }
}
