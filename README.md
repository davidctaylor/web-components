# DCT UI Component Library

A library of high level UI Web Components inspired by Material Design 3 and built using Stencil.js

## Installation

### React
- Install the latest `@dctjs/react` library package from npm. This includes all of all the available dctjs components.
 
 ````npm install @dctjs/react --save````

- Import components as components as use required. For example to display the button component

  ````
  import { DctButton } from '@dctjs/react';

  const DisplayButton = () => {
    return (<DctButton border="outlined">Hello world!</DctButton>);
  }
  ````

### Javascript
- Update the head of your index.html file to include the script tag
  `<script type='module' src=/build/dct-components.esm.js></script>'>`
- Then you can use the element anywhere in your template, JSX, html etc

## Documentation

[Documentation](https://davidctaylor.github.io/web-components/) is available for each of the components in the library
