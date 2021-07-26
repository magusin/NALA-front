import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

const Selects = () => (

  <>
    <div className="nav__select">
      <span className="nav__menu">Menu &nbsp;<i className="bi bi-chevron-down"></i> </span>
      <div className="nav__select-content">
        <Link to="/" className="nav__select-link">Accueil</Link>
        <Link to="/categories" className="nav__select-link">Catégories</Link>
        <Link to="/toplove" className="nav__select-link">Top-Love</Link>
      </div>
    </div>
  </>
);

export default Selects;
