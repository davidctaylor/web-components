# dct-item



<!-- Auto Generated Below -->


## Overview

Item are elements that can contain text, links or any other native elements and should
be used as rows by the List or Accordian components.

If the Item is of type link, the Item will be defined as an anchor tag.

## Properties

| Property    | Attribute   | Description                                                                                               | Type                            | Default     |
| ----------- | ----------- | --------------------------------------------------------------------------------------------------------- | ------------------------------- | ----------- |
| `disabled`  | `disabled`  | Item is in a disabled state. If of type link, click events will be disabled.                              | `boolean`                       | `false`     |
| `href`      | `href`      | Used if type link. In this case the is defined as an anchor element and requires the href value           | `string`                        | `undefined` |
| `separator` | `separator` | Determines the bottom border should be displayed if Item is not the last element in a List or According . | `"full" \| "none" \| "partial"` | `'none'`    |
| `target`    | `target`    | Used if type link. In this case the is defined as an anchor element and requires the target value         | `string`                        | `undefined` |
| `type`      | `type`      | Type of item content, link or text                                                                        | `"content" \| "link" \| "text"` | `'text'`    |


## Slots

| Slot     | Description                      |
| -------- | -------------------------------- |
| `"slot"` | Container for the Item's content |


## CSS Custom Properties

| Name                        | Description                         |
| --------------------------- | ----------------------------------- |
| `--dct-item-padding-`       | padding list item content container |
| `--dct-item-padding-bottom` | padding list item content container |
| `--dct-item-padding-right`  | padding list item content container |
| `--dct-item-padding-top`    | padding list item content container |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
