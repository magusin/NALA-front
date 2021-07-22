// == Import
import lanaLogo from './logonala.png';
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profil from 'src/components/Profil';
import Aime from 'src/components/Aime';
import Home from 'src/components/Home';
import Connexion from 'src/containers/Connexion';
import Notification from 'src/components/Notification';
import Navbar from 'src/components/Navbar/Navbar';


// == Composant
function App() {
  return (
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
    </Router>
  );
}

// == Export
export default App;


