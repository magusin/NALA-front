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
            <Link to="/"><h2>Accueil</h2></Link>
            <Link to="/toplove"><h2>Top-Love</h2></Link>
            {categories.map((category, index) => {
              return(              
              <div key={'cat' + index}>
              {category.map((type) => 
              {
              return(
                <div key={index + type.id}>
                  <Link to={`/categories/${type.id}`}><h2>{type.name}</h2></Link>
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
