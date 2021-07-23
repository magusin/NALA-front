import { SAVE_CATEGORIES } from "../actions/saveData";

const initialState = {
  categories: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return{
        ...state,
        categories: action.data,
      }
    default:
      return state;
  }
};

export default reducer;
