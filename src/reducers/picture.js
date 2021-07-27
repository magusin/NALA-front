import { SAVE_POST_WITH_ID } from "src/actions/saveData.js";
import { CHANGE_DISPLAY_COMMENTS } from "../actions/picture";

const initialState = {
  picture:[],
  isReady:false,
  OpenComment: false,
  displayComments: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_POST_WITH_ID:
      return{
        ...state,
        picture : action.data,
        isReady : true,
      };
    case CHANGE_DISPLAY_COMMENTS:
      return{
        ...state,
        displayComments: !state.displayComments,
      }
    default:
      return state;
  }
};

export default reducer;
