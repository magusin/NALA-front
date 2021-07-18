// == Import
import lanaLogo from './logonala.png';
import React from 'react';
import Navbar from 'src/components/Navbar/Navbar';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// == Composant
function App() {
  return (
    <Router>
      <Navbar />
      <center><img src={lanaLogo} alt="lana logo" /></center>
    </Router>
  );
}

// == Export
export default App;


