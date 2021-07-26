import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './nav.scss';

const Selects = ({
  fetchCategories,
  categoriesLoaded,
  categories
}) => { 
  
  return(

  <>
    <div className="nav__select">
      <span className="nav__menu">Menu &nbsp;<i className="bi bi-chevron-down"></i> </span>
        {categoriesLoaded && (
          <div className="nav__select-content">
            <Link to="/" className="nav__select-link">Accueil</Link>
            <Link to="/toplove" className="nav__select-link">Top-Love</Link>
            {categories.map((category) => (
              category.map((type) => (
                <>
                  <Link key={'category' + type.id} to={`/categories/${type.id}`} className="nav__select-link">{type.name}</Link>
                </>
              ))
            ))}            
          </div>
        )}
    </div>
  </>
);
};

Selects.protoTypes = {
  fetchCategories:PropTypes.func.isRequired,
  categoriesLoaded: PropTypes.bool.isRequired,
};

export default Selects;
