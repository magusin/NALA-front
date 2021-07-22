import { combineReducers } from "redux";

import connexionForm from "./connexionForm";
import navbar from "./navbar";

const rootReducer = combineReducers({
  connexionForm: connexionForm,
  navbar: navbar,
});

export default rootReducer;
