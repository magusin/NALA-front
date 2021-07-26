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

export const CONNECT_USER = 'CONNECT_USER';
export const connectUser = (id) => ({
  type: CONNECT_USER,
  id,
});

export const SAVE_USER = 'SAVE_USER';
export const saveUser = () => ({
  type: SAVE_USER,
});

export const REGISTER_USER = 'REGISTER_USER';
export const registerUser = (id) => ({
  type: REGISTER_USER,
  id,
});




