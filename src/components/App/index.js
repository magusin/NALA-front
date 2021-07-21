// == Import npm
import React from 'react';

// Import
import Home from 'src/containers/Home';

// == Import
import './app.scss';
import Nav from '../Nav'
import Footer from '../Footer';
import Contact from 'src/containers/Contact';
import CGU from '../Footer/Links/CGU';
import LegaleMentions from '../Footer/Links/LegalesMentions';
import AnimalDefense from '../Footer/Links/AnimalDefense';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// == Composant
const App = () => (
  <div className="app">
    <Router>
      <Nav />
    <Home/>
      <Switch>
        <Route path='/protection-animale' component={AnimalDefense} />
        <Route path='/contact' component={Contact} />
        <Route path='/mentions-legales' component={LegaleMentions} />
        <Route path='/cgu' component={CGU} />
      </Switch>
      <Footer />
    </Router>  
  </div>
);

// == Export
export default App;
