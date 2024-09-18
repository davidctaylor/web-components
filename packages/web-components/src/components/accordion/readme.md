# dct-accordion

<!-- Auto Generated Below -->


## Overview

Accordions provide collapsible sections in your content to reduce vertical space while providing a
way of organizing and grouping information.

### Heading element
Accordions require the `header` slot to be populated e.g. with the `dct-heading` component allowing
the display of accordion title and optional icon elements. The heading record acts a button controlling
expannd and collapse events.

## Properties

| Property   | Attribute  | Description                                                                           | Type                            | Default  |
| ---------- | ---------- | ------------------------------------------------------------------------------------- | ------------------------------- | -------- |
| `disabled` | `disabled` | If true, the accordion is in a disabled state                                         | `boolean`                       | `false`  |
| `divider`  | `divider`  | If set to `full` or `partial`, displays a divider or separator line for the accordion | `"full" \| "none" \| "partial"` | `'full'` |
| `expanded` | `expanded` | If true, the accordion is in an expanded state.                                       | `boolean`                       | `false`  |


## Events

| Event             | Description                                     | Type                                 |
| ----------------- | ----------------------------------------------- | ------------------------------------ |
| `accordionChange` | Accordion expande/collapse change event emitter | `CustomEvent<{ expaned: boolean; }>` |


## Slots

| Slot       | Description                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| `"header"` | Header content is placed within an button element and is used to expand or collapse the accordion item. |
| `"slot"`   | Container for the accordion content                                                                     |


## CSS Custom Properties

| Name                             | Description                      |
| -------------------------------- | -------------------------------- |
| `--dct-accordion-background`     | accordion background             |
| `--dct-accordion-border-color`   | accordion border color           |
| `--dct-accordion-padding-bottom` | accordion content padding bottom |
| `--dct-accordion-padding-letf`   | accordion content padding left   |
| `--dct-accordion-padding-right`  | accordion content padding right  |
| `--dct-accordion-padding-top`    | accordion content padding top    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
