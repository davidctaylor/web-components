export interface CarouselPosition {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  diff: number;
}
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
}

export interface CarouselEffect {
  next(carousel: CarouselState, direction: 'prev' | 'next'): void;
  update(carousel: CarouselState): void;
  scroll(carousel: CarouselState): void;
}
