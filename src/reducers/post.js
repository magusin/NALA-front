import { bindActionCreators } from "redux";
import { CHANGE_CATEGORY, CHANGE_TITLE, INITIALISATION_FIELDS, ADD_NEW_PICTURE, UPLOAD_NOTIFICATION_MESSAGE } from "../actions/post";

const initialState = {
  categorySelected : 1,
  title: null,
  addPicture: null,
  notification: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NEW_PICTURE:{
      return {
        ...state,
        addPicture: action.newPicture,
      };
    };
    case CHANGE_CATEGORY:{

      action.id = parseInt(action.id);
      return{
        ...state,
        categorySelected: action.id,
      };
    };
    case CHANGE_TITLE:
      return{
        ...state,
        title: action.title,
      };
    case INITIALISATION_FIELDS:
      return{
        ...state,
        categorySelected:1,
        title: null,
        addPicture: null,
      };
    case UPLOAD_NOTIFICATION_MESSAGE:
      if(action.elementNotify == 'postAdd'){
        return{
          ...state,
          notification:'postAdd'+action.status,
          categorySelected:1,
          title: null,
          addPicture: null,
        }
      }
      else{
        return{
          ...state,
          notification: action.status,
        };
      };
    default:
      return state;
  }
};

export default reducer;
