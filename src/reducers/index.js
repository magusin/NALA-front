import { NEW_SEARCH, SET_NEW_SEARCH } from '../actions';

const initialState = {
  newSearch: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case NEW_SEARCH: {
      return {
        ...state,
        newSearch: action.newSearch
      }
    }

    case SET_NEW_SEARCH:{
      return {
        ...state,
        newSearch: action.newSearch
      }
    }
    
    default:
      return state;
  }
};

export default reducer;
