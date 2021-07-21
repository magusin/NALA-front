import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo_footer.png';

const Footer = () => (
  <div className="block">
    <div className="footer">
      <div className="footer__container">
        <img src={Logo} alt="Logo Nala" className="footer__container-logo"/>
      </div>
      <div className="footer__link">
      <ul className="footer__link-group">
        <li className="footer__link-text"> <Link to="/protection-animale">Défense des animaux</Link> </li>
        <li className="footer__link-text"> <Link to="/contact">Nous contacter </Link></li>
        <li className="footer__link-text"> <Link to="/mentions-legales">Mentions Légales</Link></li>
        <li className="footer__link-text"> <Link to="/cgu">CGU</Link></li>
      </ul>
    </div>
  </div>
    
  </div>
);

export default Footer;
