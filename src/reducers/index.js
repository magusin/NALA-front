import { combineReducers } from 'redux';
import connexionForm from './connexionForm';
import searchbar from './searchbar';
import categories from './categories';
import picture from './picture';
import comment from './comment';
import user from './user';
import profil from './profil';
import post from './post';

const rootReducer = combineReducers({
  searchbar: searchbar,
  connexionForm: connexionForm,
  categories: categories,
  picture: picture,
  comment: comment,
  user: user,
  profil: profil,
  post: post,
});

export default rootReducer;
