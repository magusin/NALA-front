import { CHANGE_DARK_MODE } from '../actions';
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
  firstname: null,
  lastname: null,
  password: '',
  darkMode: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_DARK_MODE:
      localStorage.removeItem('darkMode');
      if(state.darkMode === true){
        localStorage.setItem('darkMode', false);
      }else if(state.darkMode === false){
        localStorage.setItem('darkMode', true);
      }
      return{
        ...state,
        darkMode: !state.darkMode,
      };
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
      if(action.screenMode === null){
        return{
          ...state,
          token: action.token,
          userId: action.id,
          nickname: action.nickname,
          logged: !!action.token,
          email: action.email,
          lastname: action.lastname,
          firstname: action.firstname,
          password: action.password,
          darkMode: false,
        }
      }
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
        darkMode: action.screenMode,
      };
    };
    default:
      return state;
  }
};

export default reducer;
