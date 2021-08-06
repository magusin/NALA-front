import { SAVE_USER_CONNECT, SAVE_USER_REGISTER } from '../actions/saveData';
import {
  SELECT_INSCRIPTION_FORM,
  SELECT_CONNEXION_FORM,
  NEW_CONNEXION_EMAIL,
  SET_NEW_CONNEXION_EMAIL,
  NEW_CONNEXION_PASSWORD,
  SET_NEW_CONNEXION_PASSWORD,
  NEW_REGISTER_EMAIL,
  SET_NEW_REGISTER_EMAIL,
  NEW_REGISTER_PSEUDO,
  SET_NEW_REGISTER_PSEUDO,
  NEW_REGISTER_PASSWORD,
  SET_NEW_REGISTER_PASSWORD,
  CHANGE_CONNEXION_FORM_FOR_CONNEXION,
  CHANGE_CONNEXION_FORM_FOR_REGISTER,
  SELECT_PASSWORD_FORM,
  LOGOUT_USER,
} from '../actions/connexionForm';

const initialState = {
  connexionSelect: true,
  inscriptionSelect: false,
  newConnexionEmail: '',
  newConnexionPassword: '',
  newRegisterEmail: '',
  newRegisterPseudo: '',
  newRegisterPassword: '',
  logged: false,
  passwordMissSelect: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_REGISTER:
      return {
        newRegisterEmail: '',
        newRegisterPseudo: '',
        newRegisterPassword: '',
        inscriptionSelect: false,
        connexionSelect: true,
      };
    case SAVE_USER_CONNECT:
      return {
        ...state,
        newConnexionEmail: '',
        newConnexionPassword: '',
      };
    case SET_NEW_REGISTER_PASSWORD:
      return {
        ...state,
        newRegisterPassword: action.newRegisterPassword,
      };
    case NEW_REGISTER_PASSWORD:
      return {
        ...state,
        newRegisterPassword: action.newRegisterPassword,
      };
    case SET_NEW_REGISTER_PSEUDO:
      return {
        ...state,
        newRegisterPseudo: action.newRegisterPseudo,
      };
    case NEW_REGISTER_PSEUDO:
      return {
        ...state,
        newRegisterPseudo: action.newRegisterPseudo,
      };
    case SET_NEW_REGISTER_EMAIL:
      return {
        ...state,
        newRegisterEmail: action.newRegisterEmail,
      };
    case NEW_REGISTER_EMAIL:
      return {
        ...state,
        newRegfisterEmail: action.newRegisterEmail,
      };
    case SET_NEW_CONNEXION_PASSWORD:
      return {
        ...state,
        newConnexionPassword: action.newConnexionPassword,
      };
    case NEW_CONNEXION_PASSWORD:
      return {
        ...state,
        newConnexionPassword: action.newConnexionPassword,
      };
    case SET_NEW_CONNEXION_EMAIL:
      return {
        ...state,
        newConnexionEmail: action.newConnexionEmail,
      };
    case NEW_CONNEXION_EMAIL:
      return {
        ...state,
        newConnexionEmail: action.newConnexionEmail,
      };
    case SELECT_CONNEXION_FORM:
      return {
        ...state,
        connexionSelect: true,
        inscriptionSelect: false,
        passwordMissSelect: false,
      };
    case SELECT_INSCRIPTION_FORM:
      return {
        ...state,
        connexionSelect: false,
        inscriptionSelect: true,
        passwordMissSelect: false,
      };
      case SELECT_PASSWORD_FORM:
        return {
          ...state,
          connexionSelect: false,
          inscriptionSelect: false,
          passwordMissSelect: true,
        };
    case CHANGE_CONNEXION_FORM_FOR_CONNEXION:
      return {
        ...state,
        connexionSelect: true,
        inscriptionSelect: false,
        passwordMissSelect: false,
      };
    case CHANGE_CONNEXION_FORM_FOR_REGISTER:
      return {
        ...state,
        connexionSelect: false,
        inscriptionSelect: true,
        passwordMissSelect: false,
      };

    default:
      return state;
  }
};

export default reducer;
