import React from 'react';

import './nav.scss';

const SearchBar = () => (
  <>
    <label for="site-search" className="nav__label">
      <input type="search" id="site-search" placeholder="Rechercher" className="nav__search"/>
      <button type="button" className="nav__search-button"><i class="bi bi-search"></i></button>
    </label>
  </>
);

export default SearchBar;
