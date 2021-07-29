import { SAVE_TOKEN} from '../actions/connexionForm';

const initialState = {
  isLogged: true,
  userId: 4,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TOKEN: {
      return {
        ...state,
        token : action.token,
      }
    }

    default:
      return state;
  }
};



export default reducer;
