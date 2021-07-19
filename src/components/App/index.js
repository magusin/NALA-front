// == Import npm
import React from 'react';

// == Import
import './app.scss';
import Nav from '../Nav'
import Footer from '../Footer';
import Contact from '../Footer/Links/Contact'

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Contact />
    <Footer />
  </div>
);

// == Export
export default App;
