import { SAVE_TOKEN, LOGOUT_USER } from '../actions/connexionForm';
import { SAVE_USER_CONNECT } from '../actions/saveData';

const initialState = {
  logged: false,
  nickname: '',
  token: null,
  userId: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_CONNECT:
      return {
        ...state,
        logged: true,
        token: action.token,
        userId: action.id,
        nickname: action.nickname,
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
        userId: action.id,
        nickname: action.nickname,
        logged: !!action.token,
      };
    }
    default:
      return state;
  }
};

export default reducer;
