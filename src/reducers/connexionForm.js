import {
  SELECT_INSCRIPTION_FORM,
  SELECT_CONNEXION_FORM,
} from "../actions/connexionForm";

const initialState = {
  connexionSelect: true,
  inscriptionSelect: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
