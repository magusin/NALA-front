import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './category.scss';

const Category = ({
  fetchCategory,
}) => {

  useEffect(
    fetchCategory,
    [],
  );


  return(
  <div className="category">
    <h1>Nom de la Catégorie</h1>
  </div>
  );
}

Category.protoTypes = {
fetchCategory : PropTypes.func.isRequired,
};

export default Category;