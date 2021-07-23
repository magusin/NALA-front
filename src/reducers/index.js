import { combineReducers } from 'redux';
import connexionForm from "./connexionForm";
import carousel from './carousel';
import searchbar from './searchbar';
import contactform from './contactform';
import categories from './categories';
import picture from './picture';

const rootReducer = combineReducers({
  carousel: carousel,
  searchbar: searchbar,
  contactform: contactform,
  connexionForm: connexionForm,
  categories: categories,
  picture: picture,
});

export default rootReducer;
