// == Import npm
import React from 'react';

// == Import
import './app.scss';
import Nav from '../Nav'
import Footer from '../Footer';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Footer />
  </div>
);

// == Export
export default App;
