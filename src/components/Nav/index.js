import React from 'react';

import './nav.scss';
import Buttons from './Buttons'
import Select from './Select'
import SearchBar from 'src/containers/SearchBar'



const Nav = () => (
  <div className="nav">
    <Buttons />
    <Select />
    <SearchBar />
  </div>
);

export default Nav;