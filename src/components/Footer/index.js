import React from 'react';

import './footer.scss';
import Logo from '../../assets/logo_footer.png';

const Footer = () => (
  <div>
    <div className="footer">
        <div>
        <img src={Logo} alt="" className="footer__logo"/>
        </div>
      <div className="footer__link">
        <ul className="footer__link-group">
          <li className="footer__link-text"> <a href="">Défense des animaux</a> </li>
          <li className="footer__link-text"> <a href="">Nous contacter</a> </li>
          <li className="footer__link-text"> <a href="">Mentions Légales</a> </li>
          <li className="footer__link-text"> <a href="">CGU</a></li>
        </ul>
      </div>
    </div>
    <p className="footer__copy">NALA - 2021 &copy;</p>
  </div>
);

export default Footer;
