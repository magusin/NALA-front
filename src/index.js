// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


// == Import : store
import store from 'src/store';

// == Import : local
// Composants
import App from 'src/containers/App';

// == Render
const rootReactElement = (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

const target = document.getElementById('root');


render(rootReactElement, target);

