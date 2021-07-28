import { SAVE_USER } from "../actions/saveData";
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
} from "../actions/connexionForm";

const initialState = {
  connexionSelect: true,
  inscriptionSelect: false,
  newConnexionEmail: '',
  newConnexionPassword: '',
  newRegisterEmail: '',
  newRegisterPseudo: '',
  newRegisterPassword: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        newConnexionEmail: '',
        newConnexionPassword: '',
        newRegisterEmail: '',
        newRegisterPseudo: '',
        newRegisterPassword: '',
      }
    case SET_NEW_REGISTER_PASSWORD:
      return {
        ...state,
        newRegisterPassword: action.newRegisterPassword
      }
    case NEW_REGISTER_PASSWORD:
      return {
        ...state,
        newRegisterPassword: action.newRegisterPassword,
      }
    case SET_NEW_REGISTER_PSEUDO:
      return {
        ...state,
        newRegisterPseudo: action.newRegisterPseudo,
      }
    case NEW_REGISTER_PSEUDO:
      return{
        ...state,
        newRegisterPseudo: action.newRegisterPseudo,
      }
    case SET_NEW_REGISTER_EMAIL:
      return {
        ...state,
        newRegisterEmail: action.newRegisterEmail,
      }
    case NEW_REGISTER_EMAIL:
      return {
        ...state,
        newRegfisterEmail: action.newRegisterEmail,
      }
    case SET_NEW_CONNEXION_PASSWORD:
      return {
        ...state,
        newConnexionPassword: action.newConnexionPassword,
      }
    case NEW_CONNEXION_PASSWORD:
      return {
        ...state,
        newConnexionPassword: action.newConnexionPassword
      }
    case SET_NEW_CONNEXION_EMAIL:
      return {
        ...state,
        newConnexionEmail: action.newConnexionEmail,
      }
    case NEW_CONNEXION_EMAIL:
      return {
        ...state,
        newConnexionEmail: action.newConnexionEmail,
      }
    case SELECT_CONNEXION_FORM:
      return {
        ...state,
        connexionSelect: true,
        inscriptionSelect: false,
      };
    case SELECT_INSCRIPTION_FORM:
      return {
        ...state,
        connexionSelect: false,
        inscriptionSelect: true,
      };
      
    default:
      return state;
  }
};

export default reducer;
