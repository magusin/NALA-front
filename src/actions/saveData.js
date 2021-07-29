export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';

export const saveCategories = (data) => ({
  type: SAVE_CATEGORIES, 
  data:data,
});

export const SAVE_POST_WITH_ID = 'SAVE_POST_WITH_ID';

export const savePostWithId = (data) => ({
  type: SAVE_POST_WITH_ID,
  data:data,
});

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (data) => ({
  type: SAVE_USER,
  data,
});
export const SAVE_TOPLOVE = 'SAVE_TOPLOVE';

export const saveTopLove = (data) => ({
  type: SAVE_TOPLOVE,
  data: data,  
});

export const SAVE_LAST_POSTS = 'SAVE_LAST_POSTS';

export const saveLastPosts = (data) => ({
  type: SAVE_LAST_POSTS,
  data : data,
});

export const SAVE_COMMENTS_WITH_POST_ID = 'SAVE_COMMENTS_WITH_POST_ID';

export const saveCommentsWithPostId = (data) => ({
  type: SAVE_COMMENTS_WITH_POST_ID,
  data: data,
});

export const SAVE_CATEGORY_WITH_ID = 'SAVE_CATEGORY_WITH_ID';

export const saveCategoryWithId = (data) => ({
  type: SAVE_CATEGORY_WITH_ID,
  data: data,
});



