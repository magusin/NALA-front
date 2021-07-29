import { WRITE_NEW_COMMENT } from "../actions/comment";
import { saveCommentsWithPostId, SAVE_COMMENTS_WITH_POST_ID, SAVE_NEW_COMMENT } from "../actions/saveData";

const initialState = {
  comments: [],
  commentIsReady: false,
  newComment:'',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COMMENTS_WITH_POST_ID:

      return{
        ...state,
        comments: action.data,
      }
    case WRITE_NEW_COMMENT:
      return{
        ...state,
        newComment: action.text,
      }
    case SAVE_NEW_COMMENT:
      return{
        ...state,
        comments:[...state.comments, action.data],
      }
    default:
      return state;
  }
};

export default reducer;
