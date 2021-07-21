import { combineReducers } from 'redux';

import searchbar from './searchbar';
import contactform from './contactform';



const rootReducer = combineReducers({
  searchbar: searchbar,
  contactform: contactform,
});

export default rootReducer;