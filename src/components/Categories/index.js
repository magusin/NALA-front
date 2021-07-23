import React from 'react';
import PropTypes from 'prop-types';

import './categories.scss';

const Categories = ({
  fetchCategories,
}) => {
  // useEffect(
  //   fetchCategories,
  //   [],
  // );

  return(
    <div className="categories">
      <h1>Categories</h1>
    </div>
  );
}

Categories.protoTypes = {
  fetchCategories: PropTypes.func.isRequired,
}

export default Categories;
