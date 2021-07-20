import { NEW_EMAIL, NEW_FIRST_NAME, NEW_MESSAGE, NEW_SEARCH, NEW_SUBJECT, SET_NEW_EMAIL, SET_NEW_FIRST_NAME, SET_NEW_MESSAGE, SET_NEW_SEARCH, SET_NEW_SUBJECT } from '../actions';

const initialState = {
  newSearch: '',
  newFirstName: '',
  newEmail: '',
  newSubject: '',
  newMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_FIRST_NAME: {
      return {
        ...state,
        newFirstName: action.newFirstName,
      }
    }
    case SET_NEW_FIRST_NAME: {
      return {
        ...state,
        newFirstName: action.newFirstName,
      }
    }

    case NEW_EMAIL: {
      return {
        ...state,
        newEmail: action.newEmail
      }
    }
    case SET_NEW_EMAIL: {
      return {
        ...state,
        newEmail: action.newEmail,
      }
    }

    case NEW_SUBJECT: {
      return {
        ...state,
        newSubject: action.newSubject,
      }
    }
    case SET_NEW_SUBJECT: {
      return {
        ...state,
        newSubject: action.newSubject,
      }
    }

    case NEW_MESSAGE: {
      return {
        ...state,
        newMessage: action.newMessage,
      }
    }
    case SET_NEW_MESSAGE: {
      return {
        ...state,
        newMessage: action.newMessage,
      }
    }

    case NEW_SEARCH: {
      return {
        ...state,
        newSearch: action.newSearch,
      }
    }
    case SET_NEW_SEARCH: {
      return {
        ...state,
        newSearch: action.newSearch,
      }
    }
    
    default:
      return state;
  }
};

export default reducer;
