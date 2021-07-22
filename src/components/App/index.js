<<<<<<< HEAD

// == Import npm
=======
// == Import

>>>>>>> main
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// Import
import Home from 'src/containers/Home';

// == Import
import './app.scss';
import Nav from '../Nav'
import Footer from '../Footer';
import Contact from 'src/containers/Contact';
import Error from '../Error';
import CGU from '../Footer/Links/CGU';
import LegaleMentions from '../Footer/Links/LegalesMentions';
import AnimalDefense from '../Footer/Links/AnimalDefense';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profil from 'src/components/Profil';
import Aime from 'src/components/Aime';
import Home from 'src/components/Home';
import Connexion from 'src/containers/Connexion';
import Notification from 'src/components/Notification';
import Navbar from 'src/components/Navbar/Navbar';
import lanaLogo from './logonala.png';

// == Composant
const App = () => (
  <div className="app">

    <Router>
    <Navbar />
      <center><img src={lanaLogo} alt="lana logo" /></center>
      <Switch>
        <Route path='/connexion' component={Connexion} />
        <Route path='/profil' component={Profil} />
        <Route path='/notifications' component={Notification} />
        <Route path='/tags' component={Aime} />
        <Route path='/' component={Home} />
      </Switch>
      <Nav />
      <Error />
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


