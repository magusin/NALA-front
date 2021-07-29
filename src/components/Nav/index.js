import React from 'react';

import './nav.scss';
import Selects from 'src/containers/Nav/Selects';
import SearchBar from 'src/containers/SearchBar';
import Buttons from './Buttons';

const Nav = () => (
  <div className="nav">
    <Buttons />
    <Selects />
    <SearchBar />
  </div>
);

export default Nav;
