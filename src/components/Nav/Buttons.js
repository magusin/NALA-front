import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

const Buttons = () => (
  <>
    <Link to="/"><button type="button" className="nav__button">Accueil</button></Link>
    <Link to="/categories"><button type="button" className="nav__button">Catégories</button></Link>
    <Link to="/topLove"><button type="button" className="nav__button">Top-Love</button></Link>
  </>
);

export default Buttons;
