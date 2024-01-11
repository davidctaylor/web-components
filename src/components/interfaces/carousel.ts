export interface CarouselPosition {
  active: boolean;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  previousX: number;
  previousY: number;
}

/**
 * CarouselState interface
 */
export interface CarouselState {
  activeIndex: number;
  cards: HTMLElement[];
  cardSpacing: number;
  cardWidth: number;
  cardWidthMin: number;
  cardHeight: number;
  containerEl: HTMLElement;
  position: CarouselPosition;
  width: number;
  height: number;
};

/**
 * CarouselEventType
 */
export type CarouselEventType = {
  activeIndex: number;
  activeCard: HTMLElement;
  renderAll: boolean;
  totalCards: number;
};

/**
 * CarouselCardEventType
 */
export type CarouselCardEventType = {
  card: HTMLElement,
  visibility: 'hidden' | 'visible' | 'small' 
};

/**
 * CarouselEffect interface
 */
export interface CarouselEffect {
  next(carousel: CarouselState, direction: 'prev' | 'next'): void;
  render(carousel: CarouselState): void;
  renderAll(carousel: CarouselState, isEnabled: boolean): void; 
  scroll(carousel: CarouselState): void;
  event(fn: (event: CarouselCardEventType) => void);
}


