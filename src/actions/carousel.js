export const CAROUSEL_PREVIOUS = 'CAROUSEL_PREVIOUS';

export const carouselPrevious = (category) => ({
  type: CAROUSEL_PREVIOUS,
  category: category,
});

export const CAROUSEL_NEXT = 'CAROUSEL_NEXT';

export const carouselNext = (category) => ({
  type: CAROUSEL_NEXT,
  category: category,
});
