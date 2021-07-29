import { SAVE_TOKEN } from '../actions/connexionForm';

const initialState = {
  logged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TOKEN: {
      return {
        ...state,
        token : action.token,
        logged: true,
      }
    }

    default:
      return state;
  }
};



export default reducer;
