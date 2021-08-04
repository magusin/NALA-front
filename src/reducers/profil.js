import {
  NEW_PROFIL_EMAIL,
  NEW_PROFIL_FIRSTNAME,
  NEW_PROFIL_NAME,
  NEW_PROFIL_PSEUDO,
  NEW_PROFIL_PASSWORD,
} from '../actions/profil';

const initialState = {
  profilPseudo: '',
  profilName: '',
  profilFirstname: '',
  profilEmail: '',
  profilPassword: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_PROFIL_PASSWORD:
      return {
        ...state,
        profilPassword: action.profilPassword,
      };
    case NEW_PROFIL_EMAIL:
      return {
        ...state,
        profilEmail: action.profilEmail,
      };
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
