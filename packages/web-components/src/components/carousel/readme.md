# dct-carousel

<!-- Auto Generated Below -->


## Overview

Carousel's show a collection of items that can be scrolled on and off the screen and have the
follwowing features
* Contain visual items like images or video, along with optional label text
* Items change size as they move through the carousel with small leading/trailing items indicating that there is more content available
* Optional controls on the top left or bottom right allow the Carousel to display all content using full screen  grid layout

## Properties

| Property     | Attribute     | Description                                                                                               | Type      | Default     |
| ------------ | ------------- | --------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `disabled`   | `disabled`    | Carousel is it a disabled state. Default false                                                            | `boolean` | `false`     |
| `footerText` | `footer-text` | Optional text to display in Carousels footer element determine if all carousel cards are visible          | `string`  | `undefined` |
| `headerText` | `header-text` | Optional text to display in Carousels header element determine if all carousel cards are visible          | `string`  | `undefined` |
| `renderAll`  | `render-all`  | If true, the carousel is in an render all state and all Carousel cards will be displayed in a grid layout | `boolean` | `false`     |


## Events

| Event                | Description                   | Type                                                                                               |
| -------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------- |
| `carouselCardChange` | Carousel card change event    | `CustomEvent<{ card: HTMLElement; visibility: "small" \| "hidden" \| "visible"; }>`                |
| `carouselChange`     | Carousel change event emitter | `CustomEvent<{ hasPrevious: boolean; hasNext: boolean; renderAll: boolean; totalCards: number; }>` |


## Methods

### `navigate(direction: 'prev' | 'next') => Promise<void>`

Method to move from previous/next card with in the carousel.

#### Parameters

| Name        | Type               | Description |
| ----------- | ------------------ | ----------- |
| `direction` | `"prev" \| "next"` |             |

#### Returns

Type: `Promise<void>`




## Slots

| Slot     | Description                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------- |
| `"icon"` | Header content is placed within an button element and is used to expand or collapse the accordion item. |
| `"slot"` | Container for the Carousel's content                                                                    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
