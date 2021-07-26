export const FETCH_TOPLOVE_FROM_API = 'FETCH_TOPLOVE_FROM_API';

export const fetchTopLoveFromApi = () => ({
  type: FETCH_TOPLOVE_FROM_API, 
});

export const FETCH_POST_WITH_ID_FROM_API = 'FETCH_POST_WITH_ID_FROM_API';

export const fetchPostWithIdFromApi = (id) => ({
  type: FETCH_POST_WITH_ID_FROM_API,
  id:id,
});

export const FETCH_CATEGORIES_FROM_API = 'FETCH_CATEGORIES_FROM_API';

export const fetchCategoriesFromApi = () => ({
  type: FETCH_CATEGORIES_FROM_API,  
});

export const FETCH_LAST_POST_FROM_API = 'FETCH_LAST_POST_FROM_API';

export const fetchLastPostFromApi = () => ({
  type: FETCH_LAST_POST_FROM_API,
});





