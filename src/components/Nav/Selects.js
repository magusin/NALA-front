import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

const Selects = () => (

  <>
    <select name="nav" id="nav__select" className="nav__select">
        <option className="nav__select-option" value="Accueil"><Link to="/">Accueil</Link></option>
        <option className="nav__select-option" value="Categories">Catégories</option>
        <option className="nav__select-option" value="Top-Love">Top-Love</option>
      </select> 
  </>
);

export default Selects;

