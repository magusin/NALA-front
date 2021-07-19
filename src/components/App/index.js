// == Import npm
import React from 'react';

// == Import
import './app.scss';
import Nav from '../Nav'
import Footer from '../Footer';
import Contact from '../Footer/Links/Contact'
import CGU from '../Footer/Links/Cgu';
import LegaleMentions from '../Footer/Links/LegaleMentions';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    {/* <Contact /> */}
    {/* <CGU /> */}
    <LegaleMentions />
    <Footer />
  </div>
);

// == Export
export default App;
