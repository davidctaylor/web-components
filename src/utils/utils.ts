declare const __zone_symbol__requestAnimationFrame: any;
declare const requestAnimationFrame: any;

export const hasSlot = (el: HTMLElement, name: string): boolean => {
  return !!el.querySelector(`[slot="${name}"]`);
};

export const inSideContainer = (el: HTMLElement, child: HTMLElement) => {
  const domRect: DOMRect = el.getBoundingClientRect();
  const childDR: DOMRect = child.getBoundingClientRect();
  return (
    childDR.left >= domRect.left &&
    domRect.right >= childDR.right &&
    childDR.top >= domRect.top &&
    childDR.bottom <= domRect.bottom
  );
};

export const expandContent = async (el: HTMLElement, offsetHeight: number) => {
  if (offsetHeight === 0) {
    return;
  }

  const transWait = transitionEndAsync(el);

  el.style.setProperty('max-height', `${offsetHeight}px`);

  await transWait;

  el.style.removeProperty('max-height');
};

export const collapseContent = async (
  el: HTMLElement,
  offsetHeight: number
) => {
  if (offsetHeight === 0) {
    return;
  }

  el.style.setProperty('max-height', `${offsetHeight}px`);

  internalAnimationFrame(async () => {
    el.style.setProperty('max-height', `0px`);

    await transitionEndAsync(el);

    el.style.removeProperty('max-height');
  });
};

export const internalAnimationFrame = (cb: (v: unknown) => void) => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(cb);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(cb);
  }
  return setTimeout(cb);
};

export const transitionEndAsync = (el: HTMLElement) => {
  return new Promise((resolve) => {
    console.log('XXX end2');
    transitionEnd(el, resolve);
  });
};

export const transitionEnd = (
  el: HTMLElement,
  cb: (event?: TransitionEvent) => void
) => {
  const options: any = { passive: true };
  const onTransitionEndEvent = (e?: Event) => {
    console.log('XXX end;;;');
    if (e === undefined || el === e.target) {
      remove();
      cb && cb(e as TransitionEvent);
    }
  };

  const remove = () => {
    el.removeEventListener('transitionend', onTransitionEndEvent, options);
  };

  el.addEventListener('transitionend', onTransitionEndEvent, options);

  console.log('XXX start.,,');

  return remove;
};
