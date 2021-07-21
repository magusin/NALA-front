import { combineReducers } from "redux";

import connexionForm from "./connexionForm";

const rootReducer = combineReducers({
  connexionForm: connexionForm,
});

export default rootReducer;
