import { CHANGE_CATEGORY, CHANGE_TITLE, INITIALISATION_FIELDS, ADD_NEW_PICTURE } from "../actions/post";

const initialState = {
  categorySelected : 1,
  title: null,
  addPicture: null,
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
      }
    case INITIALISATION_FIELDS:
      return{
        ...state,
        categorySelected:1,
        title: null,
        addPicture: null,
      }
    default:
      return state;
  }
};

export default reducer;
