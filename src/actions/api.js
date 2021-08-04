/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
export const FETCH_TOPLOVE_FROM_API = 'FETCH_TOPLOVE_FROM_API';

export const fetchTopLoveFromApi = () => ({
  type: FETCH_TOPLOVE_FROM_API,
});

export const FETCH_POST_WITH_ID_FROM_API = 'FETCH_POST_WITH_ID_FROM_API';

export const fetchPostWithIdFromApi = (id) => ({
  type: FETCH_POST_WITH_ID_FROM_API,
  id: id,
});

export const FETCH_CATEGORIES_FROM_API = 'FETCH_CATEGORIES_FROM_API';

export const fetchCategoriesFromApi = () => ({
  type: FETCH_CATEGORIES_FROM_API,
});

export const FETCH_LAST_POST_FROM_API = 'FETCH_LAST_POST_FROM_API';

export const fetchLastPostFromApi = () => ({
  type: FETCH_LAST_POST_FROM_API,
});

export const CONNECT_USER = 'CONNECT_USER';
export const connectUser = () => ({
  type: CONNECT_USER,
});

export const REGISTER_USER = 'REGISTER_USER';
export const registerUser = () => ({
  type: REGISTER_USER,
});

export const FETCH_COMMENTS_WITH_ID_FROM_API = 'FETCH_COMMENTS_WITH_ID_FROM_API';

export const fetchCommentsWithIdFromApi = (postId) => ({
  type: FETCH_COMMENTS_WITH_ID_FROM_API,
  // eslint-disable-next-line no-undef
  postId: id,
});

export const FETCH_CATEGORY_FROM_API = 'FETCH_CATEGORY_FROM_API';

export const fetchCategoryFromApi = (catId) => ({
  type: FETCH_CATEGORY_FROM_API,
  id: catId,
});

export const SEND_NEW_COMMENT = 'SEND_NEW_COMMENT';

export const sendNewComment = (post_id) => ({
  type: SEND_NEW_COMMENT,
  post_id: post_id,
});

export const ADD_LIKE = 'ADD_LIKE';

export const addLike = (postId) => ({
  type: ADD_LIKE,
  postId,
});

export const REMOVE_LIKE = 'REMOVE_LIKE';

export const removeLike = (postId) => ({
  type: REMOVE_LIKE,
  postId,
});

export const UPLOAD_NEW_PICTURE = 'UPLOAD_NEW_PICTURE';

export const uploadNewPicture = () => ({
  type: UPLOAD_NEW_PICTURE,
  
});

export const FETCH_NEW_POST_FROM_API = 'FETCH_NEW_POST_FROM_API';

export const fetchNewPostFromApi = () => ({
  type: FETCH_NEW_POST_FROM_API,
});


