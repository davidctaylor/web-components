/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@dctjs/web-components';


@ProxyCmp({
  inputs: ['disabled', 'divider', 'expanded']
})
@Component({
  selector: 'dct-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'divider', 'expanded'],
})
export class DctAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['accordionChange']);
  }
}


import type { AccordionEventType as IDctAccordionAccordionEventType } from '@dctjs/web-components';

export declare interface DctAccordion extends Components.DctAccordion {
  /**
   * Accordion expande/collapse change event emitter
   */
  accordionChange: EventEmitter<CustomEvent<IDctAccordionAccordionEventType>>;
}


@ProxyCmp({
  inputs: ['disabled', 'displayMultiple']
})
@Component({
  selector: 'dct-accordion-controller',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'displayMultiple'],
})
export class DctAccordionController {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DctAccordionController extends Components.DctAccordionController {}


@ProxyCmp({
  inputs: ['ariaLabel', 'buttonColor', 'buttonStyle', 'buttonType', 'disabled', 'iconButton', 'ripple']
})
@Component({
  selector: 'dct-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabel', 'buttonColor', 'buttonStyle', 'buttonType', 'disabled', 'iconButton', 'ripple'],
})
export class DctButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dctButtonClick']);
  }
}


export declare interface DctButton extends Components.DctButton {
  /**
   * Button event emitter
   */
  dctButtonClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['border', 'disabled', 'href', 'ripple', 'target']
})
@Component({
  selector: 'dct-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['border', 'disabled', 'href', 'ripple', 'target'],
})
export class DctCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DctCard extends Components.DctCard {}


@ProxyCmp({
  inputs: ['disabled']
})
@Component({
  selector: 'dct-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
})
export class DctCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DctCardContent extends Components.DctCardContent {}


@ProxyCmp({
  inputs: ['disabled', 'overlay']
})
@Component({
  selector: 'dct-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'overlay'],
})
export class DctCardTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DctCardTitle extends Components.DctCardTitle {}


@ProxyCmp({
  inputs: ['disabled', 'displayAll', 'footerText', 'headerText'],
  methods: ['navigate']
})
@Component({
  selector: 'dct-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'displayAll', 'footerText', 'headerText'],
})
export class DctCarousel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['carouselChange', 'carouselCardChange']);
  }
}


import type { CarouselEventType as IDctCarouselCarouselEventType } from '@dctjs/web-components';
import type { CarouselCardEventType as IDctCarouselCarouselCardEventType } from '@dctjs/web-components';

export declare interface DctCarousel extends Components.DctCarousel {
  /**
   * Carousel change event emitter
   */
  carouselChange: EventEmitter<CustomEvent<IDctCarouselCarouselEventType>>;
  /**
   * Carousel card change event
   */
  carouselCardChange: EventEmitter<CustomEvent<IDctCarouselCarouselCardEventType>>;
}


@ProxyCmp({
  inputs: ['disabled']
})
@Component({
  selector: 'dct-carousel-controls',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
})
export class DctCarouselControls {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DctCarouselControls extends Components.DctCarouselControls {}


@ProxyCmp({
  inputs: ['divider']
})
@Component({
  selector: 'dct-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['divider'],
})
export class DctDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DctDivider extends Components.DctDivider {}


@ProxyCmp({
  inputs: ['disabled', 'href', 'separator', 'target', 'type']
})
@Component({
  selector: 'dct-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'href', 'separator', 'target', 'type'],
})
export class DctItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DctItem extends Components.DctItem {}


@ProxyCmp({
  inputs: ['animateIcons', 'disabled', 'rotateIcon']
})
@Component({
  selector: 'dct-item-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animateIcons', 'disabled', 'rotateIcon'],
})
export class DctItemHeading {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DctItemHeading extends Components.DctItemHeading {}


@ProxyCmp({
  inputs: ['disabled', 'heading']
})
@Component({
  selector: 'dct-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'heading'],
})
export class DctList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DctList extends Components.DctList {}


@ProxyCmp({
  inputs: ['unbounded'],
  methods: ['addRipple']
})
@Component({
  selector: 'dct-ripple',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['unbounded'],
})
export class DctRipple {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DctRipple extends Components.DctRipple {}


