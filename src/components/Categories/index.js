import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './categories.scss';

const Categories = ({
  categories ,fetchCategories
}) => {
  
  useEffect(
    fetchCategories,
    [],
  );
  console.log(categories);
  return(
    
    <div className="categories">
      <h1>Categories</h1>
      
      {fetchCategories.map((categories) => (
      <main>
      <div>
      <h2 key={categories.id}>{categories.title}</h2>
      { categories }
        </div>
        </main>
    ))}
      
      
    </div>
  );
};

  


Categories.protoTypes = {
  fetchCategories: PropTypes.func.isRequired,
}

export default Categories;
