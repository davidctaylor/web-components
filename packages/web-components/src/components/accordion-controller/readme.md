# dct-accordion-controller



<!-- Auto Generated Below -->


## Overview

AccordionController

The Accordion Controller is a container for Accordion instances. It manages the state of child Accordions allowing the following;

- Accordions to be placed in a disabled
- Allowing single or multiple (all) Accordions to be expanded

## Properties

| Property          | Attribute          | Description                                                                                                                                                                                            | Type      | Default |
| ----------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ------- |
| `disabled`        | `disabled`         | Places all child Accordion elements is into a disabled/enabled state                                                                                                                                   | `boolean` | `false` |
| `displayMultiple` | `display-multiple` | Allows multilple Accordion elements be in an expanded state. If set to false, the first expanded Accordion element will remain expanded all subsequent Accordion's will be places in a collapsed state | `boolean` | `false` |


## Slots

| Slot | Description                                 |
| ---- | ------------------------------------------- |
|      | Container for all child Accordipn elements. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
