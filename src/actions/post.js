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

export const INITIALISATION_FIELDS = 'INITIALISATION_FIELDS';
export const initialisationFields = () => ({
  type: INITIALISATION_FIELDS,
  
});

export const UPLOAD_NOTIFICATION_MESSAGE = 'UPLOAD_NOTIFICATION_MESSAGE';
export const uploadNotificationMessage = (status) => ({
  type: UPLOAD_NOTIFICATION_MESSAGE,
  status,
});




