import { SAVE_CATEGORIES, SAVE_TOPLOVE } from "../actions/saveData";

const initialState = {
  categories: [],
  topLove:[],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return{
        ...state,
        categories: action.data,
      };
    case SAVE_TOPLOVE:
      return{
        ...state,
        topLove: action.data,
      }
    default:
      return state;
  }
};

export default reducer;
