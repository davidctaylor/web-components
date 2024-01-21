# dct-accordian-controller



<!-- Auto Generated Below -->


## Overview

AccordianController

The Accordian Controller is a container for Accordion instances. It manages the state of child Accordians allowing the following;

- Accordians to be placed in a disabled
- Allowing single or multiple (all) Accordians to be expanded

## Properties

| Property          | Attribute          | Description                                                                                                                                                                                            | Type      | Default |
| ----------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ------- |
| `disabled`        | `disabled`         | Places all child Accordian elements is into a disabled/enabled state                                                                                                                                   | `boolean` | `false` |
| `displayMultiple` | `display-multiple` | Allows multilple Accordian elements be in an expanded state. If set to false, the first expanded Accordian element will remain expanded all subsequent Accordian's will be places in a collapsed state | `boolean` | `false` |


## Slots

| Slot | Description                                 |
| ---- | ------------------------------------------- |
|      | Container for all child Accordian elements. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
