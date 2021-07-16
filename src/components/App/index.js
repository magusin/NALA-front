// == Import
import React from 'react';
import Header from 'src/components/Header';
import lanaLogo from './logonala.png';


// == Composant
const App = () => (
  <div className="app">
    <Header />
    <center><img src={lanaLogo} alt="lana logo" /></center>
    
  </div>
);

// == Export
export default App;
