# DCT UI Component Library

A library of high level UI Web Components inspired by Material Design 3 and built using Stencil.js

## Installation

### Angular
- Install the latest `@dctjs/angular` library package from npm. This includes all of all the available dctjs components.

 ````npm install @dctjs/angular --save````

- Import the WebComponentsModule module into a components module file. For example to display the button component

  ````
  import { WebComponentsModule } from '@dctjs/angular';
  import { MyComponent } from './my.component';
    
    @NgModule({
      declarations: [MyComponent],
      imports: [
        WebComponentsModule,
      ],
    })
    export class MyModule { };

  ````

- Update the components template to include the desired web component. For example to display the button component

  ````
    <dct-button (dctButtonClick)="onClick($event)"
      border="outlined">Click me!</dct-button>
  ````

### React
- Install the latest `@dctjs/react` library package from npm. This includes all of all the available dctjs components.
 
 ````npm install @dctjs/react --save````

- Import components as components as use required. For example to display the button component

  ````
  import { DctButton } from '@dctjs/react';

    const handleClick = (event: Event) => {
      console.log(event)
    }

    const DisplayButton = () => {
      return (<DctButton border="outlined"
        onDctButtonClick={handleClick}>Click me!</DctButton>);
    }
  ````

### Javascript
- Update the head of your index.html file to include the script tag
  `<script type='module' src=/build/dct-components.esm.js></script>'>`
- Then you can use the element anywhere in your template, JSX, html etc

## Documentation

[Documentation](https://davidctaylor.github.io/web-components/) is available for each of the components in the library
