import { SAVE_POST_WITH_ID } from "src/actions/saveData.js";

const initialState = {
  picture:[],
  isReady:false,
  OpenComment: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_POST_WITH_ID:
      return{
        ...state,
        picture : action.data,
        isReady : true,
      };
    default:
      return state;
  }
};

export default reducer;
