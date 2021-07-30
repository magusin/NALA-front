import { combineReducers } from 'redux';
import connexionForm from './connexionForm';
import searchbar from './searchbar';
import contactform from './contactform';
import categories from './categories';
import picture from './picture';
import comment from './comment';
import user from './user';
import profil from './profil';

const rootReducer = combineReducers({
  searchbar: searchbar,
  contactform: contactform,
  connexionForm: connexionForm,
  categories: categories,
  picture: picture,
  comment: comment,
  user: user,
  profil: profil,
});

export default rootReducer;
