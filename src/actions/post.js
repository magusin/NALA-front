export const ADD_NEW_PICTURE = 'ADD_NEW_PICTURE';

export const addNewPicture = (newPicture) => ({
  type: ADD_NEW_PICTURE,
  newPicture
});

export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

export const changeCategory = (id) => ({
  type: CHANGE_CATEGORY,  
  id
});

export const CHANGE_TITLE = 'CHANGE_TITLE';

export const changeTitle = (title) => ({
  type: CHANGE_TITLE,
  title
});


