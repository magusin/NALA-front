import React from 'react';

import './nav.scss';
import Buttons from './Buttons'
import Selects from 'src/containers/Nav/Selects'
import SearchBar from 'src/containers/SearchBar'



const Nav = () => (
  <div className="nav">
    <Buttons />
    <Selects />
    <SearchBar />
  </div>
);

export default Nav;
