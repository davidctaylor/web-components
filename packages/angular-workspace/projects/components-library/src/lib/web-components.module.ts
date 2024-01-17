import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from '@dctjs/web-components/loader';

import { DIRECTIVES } from './stencil-generated';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    },
  ]
})
export class WebComponentsModule {};