import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from 'src/components/Header/Navbar';

import './header.scss';
import lanaLogo from 'src/assets/logonala.png';

const Header = () => (
  <div className="header">
        <Navbar />
        <header className="header-logo"><Link to='/'><img src={lanaLogo} alt="lana logo" /></Link></header>
  </div>
);

export default Header;
