import { SAVE_POST_WITH_ID, SAVE_LIKE_IT } from 'src/actions/saveData';
import { REMOVE_LIKE } from '../actions/api';
import { CHANGE_DISPLAY_COMMENTS, GO_IN_BACK_RESET_PICTURE } from '../actions/picture';

const initialState = {
  picture: [],
  isReady: false,
  OpenComment: false,
  displayComments: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_POST_WITH_ID:
      return {
        ...state,
        picture: action.data,
        isReady: true,
      };
    case CHANGE_DISPLAY_COMMENTS:
      return {
        ...state,
        displayComments: !state.displayComments,
      };
    case GO_IN_BACK_RESET_PICTURE:
      return {
        ...state,
        picture: [],
        isReady: false,
        displayComments: false,
      };
    case SAVE_LIKE_IT:
      return {
        ...state,
      };
    case REMOVE_LIKE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
