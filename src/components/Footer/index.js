import React from 'react';

import './footer.scss';
import Link from './Link'
import Logo from '../../assets/logo_footer.png';

const Footer = () => (
  <div className="block">
    <div className="footer">
        <div>
          <img src={Logo} alt="Logo Nala" className="footer__logo"/>
        </div>
        <Link />
    </div>
    <p className="footer__copy">NALA - 2021 &copy;</p>
  </div>
);

export default Footer;
