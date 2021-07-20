import React from 'react';

import './nav.scss';

const Select = () => (
  <>
    <select name="nav" id="nav__select" className="nav__select">
      <option className="nav__select-option" value="Accueil">Accueil</option>
      <option className="nav__select-option" value="Categories">Catégories</option>
      <option className="nav__select-option" value="Top-Love">Top-Love</option>
    </select> 
  </>
);

export default Select;

