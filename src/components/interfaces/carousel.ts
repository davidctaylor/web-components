export interface CarouselPosition {
  active: boolean;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  previousX: number;
  previousY: number;
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
  render(carousel: CarouselState): void;
  renderAll(carousel: CarouselState, isEnabled: boolean): void; 
  scroll(carousel: CarouselState): void;
}
