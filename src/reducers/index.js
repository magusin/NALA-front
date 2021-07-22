import { combineReducers } from 'redux';
import connexionForm from "./connexionForm";
import carousel from './carousel';
import searchbar from './searchbar';
import contactform from './contactform';

const rootReducer = combineReducers({
  carousel: carousel,
  searchbar: searchbar,
  contactform: contactform,
  connexionForm: connexionForm,
});

export default rootReducer;
