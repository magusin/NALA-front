import { SAVE_CATEGORIES, SAVE_LAST_POSTS, SAVE_TOPLOVE } from "../actions/saveData";

const initialState = {
  categories: [],
  topLove:[],
  lastPosts:'',
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
      };
    case SAVE_LAST_POSTS:
      return{
        ...state,
        lastPosts: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
