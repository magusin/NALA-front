
import { createStore, applyMiddleware, compose } from 'redux';
import postsMiddleware from 'src/Middlewares/posts';

//import apiMiddleware from 'src/middlewares/api';

import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(postsMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;

