import { CHANGE_CATEGORY, CHANGE_TITLE } from "../actions/post";

const initialState = {
  categorySelected : 1,
  title: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;
