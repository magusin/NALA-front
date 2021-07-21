import { combineReducers } from 'redux';

import carousel from './carousel';
import searchbar from './searchbar';
import contactform from './contactform';

const rootReducer = combineReducers({
  carousel: carousel,
});

export default rootReducer;
