import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

const Buttons = () => (
  <>
    <button type="button" className="nav__button"><Link to='/'>Accueil</Link></button>
    <button type="button" className="nav__button"><Link to='/categories'>Catégories</Link></button>
    <button type="button" className="nav__button"><Link to='/topLove'>Top-Love</Link></button>
  </>
);

export default Buttons;
