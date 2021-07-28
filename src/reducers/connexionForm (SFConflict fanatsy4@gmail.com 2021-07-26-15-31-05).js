import {
  SELECT_INSCRIPTION_FORM,
  SELECT_CONNEXION_FORM,
  NEW_CONNEXION_EMAIL,
  SET_NEW_CONNEXION_EMAIL,
  NEW_CONNEXION_PASSWORD,
  SET_NEW_CONNEXION_PASSWORD,
  NEW_SUBSCRIPTION_EMAIL,
  SET_NEW_SUBSCRIPTION_EMAIL,
  NEW_SUBSCRIPTION_PSEUDO,
  SET_NEW_SUBSCRIPTION_PSEUDO,
  NEW_SUBSCRIPTION_PASSWORD,
  SET_NEW_SUBSCRIPTION_PASSWORD,
} from "../actions/connexionForm";

const initialState = {
  connexionSelect: true,
  inscriptionSelect: false,
  newConnexionEmail: '',
  newConnexionPassword: '',
  newSubscriptionEmail: '',
  newSubscriptionPseudo: '',
  newSubscriptionPassword: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_SUBSCRIPTION_PASSWORD:
      return {
        ...state,
        newSubscriptionPassword: action.newSubscriptionPassword
      }
    case NEW_SUBSCRIPTION_PASSWORD:
      return {
        ...state,
        newSubscriptionPassword: action.newSubscriptionPassword,
      }
    case SET_NEW_SUBSCRIPTION_PSEUDO:
      return {
        ...state,
        newSubscriptionPseudo: action.newSubscriptionPseudo,
      }
    case NEW_SUBSCRIPTION_PSEUDO:
      return{
        ...state,
        newSubscriptionPseudo: action.newSubscriptionPseudo,
      }
    case SET_NEW_SUBSCRIPTION_EMAIL:
      return {
        ...state,
        newSubscriptionEmail: action.newSubscriptionEmail,
      }
    case NEW_SUBSCRIPTION_EMAIL:
      return {
        ...state,
        newSubscriptionEmail: action.newSubscriptionEmail,
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
