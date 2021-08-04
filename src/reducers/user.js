import { SAVE_TOKEN, LOGOUT_USER } from '../actions/connexionForm';
import { SAVE_USER_CONNECT, SAVE_USER_POSTS } from '../actions/saveData';

const initialState = {
  userPosts:null,
  userPostsLoaded: false,
  logged: false,
  nickname: '',
  token: null,
  userId: null,
  email: '',
  firstname: '',
  lastname: '',
  password: '',
  darkMode: true,
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
    case SAVE_USER_POSTS:
      return {
        ...state,
        userPosts: action.data,
        userPostsLoaded: true,
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
        email: action.email,
        lastname: action.lastname,
        firstname: action.firstname,
        password: action.password,
      };
    }
    default:
      return state;
  }
};

export default reducer;
