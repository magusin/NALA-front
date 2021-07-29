import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Carousel from 'src/components/Carousel';

import './categories.scss';

const Categories = ({
  categories,
  fetchCategories,
  categoriesLoaded
}) => {

  if(!categoriesLoaded){
      useEffect(
      fetchCategories,
      [],
    );
  }


  return(
    <div className="categories">
        {categoriesLoaded && (
          <div className="categories__content">
            <Link to="/"><h1>Accueil</h1></Link>
            <Link to="/toplove"><h1>Top-Love</h1></Link>
            {categories.map((category, index) => {
              return(              
              <div key={'cat' + index}>
              {category.map((type) => 
              {
              return(
                <div key={index + type.id}>
                  <Link to={`/categories/${type.id}`}><h1>{type.name}</h1></Link>
                  <Carousel list={type.posts} categoryId={type.id}/>
                </div>
              )
              })}
              </div>         
            )})}            
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
