import { SAVE_CATEGORIES, SAVE_LAST_POSTS, SAVE_TOPLOVE } from "../actions/saveData";

const initialState = {
  categoriesLoaded : false,
  categories: [],
  topLoveLoaded: false,
  topLove:[],
  lastPostsLoaded: false,
  lastPosts:'',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      console.log('in');
      return{
        ...state,
        categories: action.data,
        categoriesLoaded:true,
      };
    case SAVE_TOPLOVE:
      return{
        ...state,
        topLove: action.data,
        topLoveLoaded: true,
      };
    case SAVE_LAST_POSTS:
      return{
        ...state,
        lastPosts: action.data,
        lastPostsLoaded: true,
      };
    default:
      return state;
  }
};

export default reducer;
