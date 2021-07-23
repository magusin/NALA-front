import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import containers
import Home from 'src/containers/Home';

// == Import components

import Contact from 'src/containers/Contact';
import Nav from 'src/components/Nav';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
import CGU from 'src/components/Footer/Links/CGU';
import LegaleMentions from 'src/components/Footer/Links/LegalesMentions';
import AnimalDefense from 'src/components/Footer/Links/AnimalDefense';

// == Import asset and css
import './app.scss';


// == Composant
const App = () => {

  return(
  <div className="app">

    <Header/>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path='/protection-animale' component={AnimalDefense} />
      <Route path='/contact' component={Contact} />
      <Route path='/mentions-legales' component={LegaleMentions} />
      <Route path='/cgu' component={CGU} />
      <Route path='/protection-animale' component={AnimalDefense} />
      <Route component={Error}/>
    </Switch> 
    <Footer /> 

  </div>
  )
};

// == Export
export default App;


