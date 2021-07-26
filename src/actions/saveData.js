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

export const SAVE_TOPLOVE = 'SAVE_TOPLOVE';

export const saveTopLove = () => ({
  type: SAVE_TOPLOVE,
  data: data,  
});
