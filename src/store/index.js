<<<<<<< HEAD
import { createStore, applyMiddleware, compose } from 'redux';

import apiMiddleware from 'src/middlewares/api';

import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(

);

const store = createStore(reducer, enhancers);
=======
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from 'src/reducers';

const store = createStore(reducer, devToolsEnhancer());
>>>>>>> HJ

export default store;
