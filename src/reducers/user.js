import { SAVE_TOKEN, LOGOUT_USER } from '../actions/connexionForm';

const initialState = {
  logged: false,
  username: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TOKEN: {
      return {
        ...state,
        token: action.token,
        logged: true,
      }
    }
    default:
      return state;
  }
};



export default reducer;
