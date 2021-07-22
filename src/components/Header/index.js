import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from 'src/components/Navbar/Navbar';
import Connexion from 'src/containers/Connexion';
import Profil from 'src/components/Profil';
import Aime from 'src/components/Aime';
import Notification from 'src/components/Notification';



import './header.scss';
import lanaLogo from 'src/assets/logonala.png';

const Header = () => (
  <div className="header">
    <Router>
        <Navbar />
        <header className="header-logo"><Link to='/'><img src={lanaLogo} alt="lana logo" /></Link></header>
        <Switch>
            <Route path='/connexion' component={Connexion} />
            <Route path='/profil' component={Profil} />
            <Route path='/notifications' component={Notification} />
            <Route path='/tags' component={Aime} />
        </Switch>
    </Router>
  </div>
);

export default Header;
