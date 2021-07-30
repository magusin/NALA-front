import { SAVE_TOKEN, LOGOUT_USER } from '../actions/connexionForm';
import { SAVE_USER_CONNECT } from '../actions/saveData';

const initialState = {
  logged: false,
  username: '',
  token: null,
  userId: 26,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_CONNECT:
      return {
        ...state,
        logged: true,
        token: action.token,
        userId: 26,
      };
    case LOGOUT_USER:
      return {
        ...state,
        logged: false,
        token: null,
      };
    case SAVE_TOKEN: {
      return {
        ...state,
        token: action.token,
        logged: !!action.token,
      };
    }
    default:
      return state;
  }
};

export default reducer;
