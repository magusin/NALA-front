  
import { combineReducers } from 'redux';

import carousel from './carousel';


const rootReducer = combineReducers({
  carousel: carousel,
});

export default rootReducer;
