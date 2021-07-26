import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './categories.scss';

const Categories = ({
  categories,
  fetchCategories,
  categoriesLoaded
}) => {

  useEffect(
    fetchCategories,
    [],
  );


  return(
    <div className="categories">
        {categoriesLoaded && (
          <div className="nav__select-content">
            <Link to="/"><h1>Accueil</h1></Link>
            <Link to="/toplove"><h1>Top-Love</h1></Link>
            {categories.map((category) => (
              <Link key={category.id} to={`/categories/${category.id}`}><h1>{category.name}</h1></Link>
            ))}            
          </div>
        )}
    </div>
  );
}

Categories.protoTypes = {
  fetchCategories:PropTypes.func.isRequired,
  categoriesLoaded: PropTypes.bool.isRequired,
}

export default Categories;
