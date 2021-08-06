/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
export const ADD_LIKE = 'ADD_LIKE';
export const addLike = (postId) => ({
  type: ADD_LIKE,
  postId,
});

export const CONNECT_USER = 'CONNECT_USER';
export const connectUser = () => ({
  type: CONNECT_USER,
});

export const EDIT_POST_FROM_API = 'EDIT_POST_FROM_API';
export const editPostFromApi = (id) => ({
  type: EDIT_POST_FROM_API,
  id,
});

export const FETCH_CATEGORIES_FROM_API = 'FETCH_CATEGORIES_FROM_API';
export const fetchCategoriesFromApi = () => ({
  type: FETCH_CATEGORIES_FROM_API,
});

export const FETCH_CATEGORY_FROM_API = 'FETCH_CATEGORY_FROM_API';
export const fetchCategoryFromApi = (catId) => ({
  type: FETCH_CATEGORY_FROM_API,
  id: catId,
});

export const FETCH_COMMENTS_WITH_ID_FROM_API = 'FETCH_COMMENTS_WITH_ID_FROM_API';
export const fetchCommentsWithIdFromApi = (postId) => ({
  type: FETCH_COMMENTS_WITH_ID_FROM_API,
  // eslint-disable-next-line no-undef
  postId: id,
});

export const FETCH_DELETE_POST = 'FETCH_DELETE_POST';
export const fetchDeletePost = (id) => ({
  type: FETCH_DELETE_POST,
  id,
});

export const FETCH_LAST_POST_FROM_API = 'FETCH_LAST_POST_FROM_API';
export const fetchLastPostFromApi = () => ({
  type: FETCH_LAST_POST_FROM_API,
});

export const FETCH_NEW_POST_FROM_API = 'FETCH_NEW_POST_FROM_API';
export const fetchNewPostFromApi = () => ({
  type: FETCH_NEW_POST_FROM_API,
});

export const FETCH_POST_WITH_ID_FROM_API = 'FETCH_POST_WITH_ID_FROM_API';
export const fetchPostWithIdFromApi = (id) => ({
  type: FETCH_POST_WITH_ID_FROM_API,
  id: id,
});

export const FETCH_TOPLOVE_FROM_API = 'FETCH_TOPLOVE_FROM_API';
export const fetchTopLoveFromApi = () => ({
  type: FETCH_TOPLOVE_FROM_API,
});

export const FETCH_USER_POSTS_FROM_API = 'FETCH_USER_POSTS_FROM_API';
export const fetchUserPostsFromApi = () => ({
  type: FETCH_USER_POSTS_FROM_API,
});

export const REGISTER_USER = 'REGISTER_USER';
export const registerUser = () => ({
  type: REGISTER_USER,
});

export const PASSWORD_USER = 'PASSWORD_USER';
export const passwordUser = () => ({
  type: PASSWORD_USER,
});

export const REMOVE_LIKE = 'REMOVE_LIKE';
export const removeLike = (postId) => ({
  type: REMOVE_LIKE,
  postId,
});

export const SEND_NEW_COMMENT = 'SEND_NEW_COMMENT';
export const sendNewComment = (post_id) => ({
  type: SEND_NEW_COMMENT,
  post_id: post_id,
});

export const UPLOAD_NEW_PICTURE = 'UPLOAD_NEW_PICTURE';
export const uploadNewPicture = () => ({
  type: UPLOAD_NEW_PICTURE,
});
