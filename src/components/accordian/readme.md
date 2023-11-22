# dct-accordian

<!-- Auto Generated Below -->


## Overview

Accordions provide collapsible sections in your content to reduce vertical space while providing a
way of organizing and grouping information.

### Heading element
Accordians require the `header` slot to be populated e.g. with the `dct-heading` component allowing
the display of accordian title and optional icon elements. The heading record acts a button controlling
expannd and collapse events.

## Properties

| Property       | Attribute       | Description                                                                           | Type                            | Default  |
| -------------- | --------------- | ------------------------------------------------------------------------------------- | ------------------------------- | -------- |
| `animateIcons` | `animate-icons` | If true, animate the icon elements dct-item-heading icons in start and end            | `boolean`                       | `true`   |
| `disabled`     | `disabled`      | If true, the accordian is in a disabled state                                         | `boolean`                       | `false`  |
| `divider`      | `divider`       | If set to `full` or `partial`, displays a divider or separator line for the accordian | `"full" \| "none" \| "partial"` | `'full'` |
| `expanded`     | `expanded`      | If true, the accordian is in an expanded state.                                       | `boolean`                       | `false`  |


## Events

| Event             | Description                                     | Type                                 |
| ----------------- | ----------------------------------------------- | ------------------------------------ |
| `accordianChange` | Accordian expande/collapse change event emitter | `CustomEvent<{ expaned: boolean; }>` |


## Slots

| Slot       | Description                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| `"header"` | Header content is placed within an button element and is used to expand or collapse the accordion item. |
| `"slot"`   | Container for the accordian content                                                                     |


## CSS Custom Properties

| Name                      | Description                                |
| ------------------------- | ------------------------------------------ |
| `--dct-accordian-padding` | padding around accordian content container |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
