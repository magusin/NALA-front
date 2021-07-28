import { saveCommentsWithPostId, SAVE_COMMENTS_WITH_POST_ID } from "../actions/saveData";

const initialState = {
  comments: [
  {
    "id":1,
    "description":"Wooow!! il est trooop joli ton chien",
    "createdAt":"2021-07-20T07:55:20+00:00",
    "user":{
      "id":1,
      "firstname":null,
      "nickname":"Aimerick",
      "picture":null
    },
  },
],
  commentIsReady: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COMMENTS_WITH_POST_ID:

      return{
        ...state,
        comments: action.data,
      }
    default:
      return state;
  }
};

export default reducer;
