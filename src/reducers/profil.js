import { NEW_PROFIL_FIRSTNAME, NEW_PROFIL_NAME, NEW_PROFIL_PSEUDO } from '../actions/profil';

const initialState = {
  profilPseudo: '',
  profilName: '',
  profilFirstname: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_PROFIL_PSEUDO:
      return {
        ...state,
        profilPseudo: action.profilPseudo,
      };
    case NEW_PROFIL_NAME:
      return {
        ...state,
        profilName: action.profilName,
      };
    case NEW_PROFIL_FIRSTNAME:
      return {
        ...state,
        profilFirstname: action.profilFirstname,
      };
    default:
      return state;
  }
};

export default reducer;
