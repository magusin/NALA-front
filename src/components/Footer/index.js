import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo_footer.png';

const Footer = () => (
  <div className="block">
    <div className="footer">
      <div>
        <img src={Logo} alt="Logo Nala" className="footer__logo"/>
      </div>
      <div className="footer__link">
      <ul className="footer__link-group">
        <li className="footer__link-text"> <Link to="/defense-animale">Défense des animaux</Link> </li>
        <li className="footer__link-text"> <Link to="/contact">Nous contacter </Link></li>
        <li className="footer__link-text"> <Link to="/mentionslegales">Mentions Légales</Link></li>
        <li className="footer__link-text"> <Link to="/cgu">CGU</Link></li>
      </ul>
  </div>
    </div>
    <p className="footer__copy">NALA - 2021 &copy;</p>
  </div>
);

export default Footer;
