# dct-ripple



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type      | Default |
| ----------- | ----------- | ----------- | --------- | ------- |
| `unbounded` | `unbounded` |             | `boolean` | `false` |


## Methods

### `addRipple(ev: Event) => Promise<() => void>`

Add ripple effect to parent element

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| `ev` | `Event` |             |

#### Returns

Type: `Promise<() => void>`




## Dependencies

### Used by

 - [dct-button](../button)
 - [dct-card](../card)

### Graph
```mermaid
graph TD;
  dct-button --> dct-ripple
  dct-card --> dct-ripple
  style dct-ripple fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
