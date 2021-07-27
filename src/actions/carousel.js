export const CAROUSEL_PREVIOUS = 'CAROUSEL_PREVIOUS';

export const carouselPrevious = (category, page) => ({
  type: CAROUSEL_PREVIOUS,
  category: category,
  page:page,
});

export const CAROUSEL_NEXT = 'CAROUSEL_NEXT';

export const carouselNext = (category, page) => ({
  type: CAROUSEL_NEXT,
  category: category,
  page:page,
  newPage:'',
});
