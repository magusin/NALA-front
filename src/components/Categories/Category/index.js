import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CatCard from 'src/components/Categories/Category/CatCard';
import './category.scss';
import Loading from 'src/components/Loading';

const Category = ({
  fetchCategory,
  category,
  categoryLoaded
}) => {

  useEffect(
    fetchCategory,
    [],
  );

    const posts = category.posts;
    console.log(category)

  return(
  <div className="category">
  {categoryLoaded &&
    <>
      <h1>{category.name}</h1>
      <div className="category__container">
        {posts.map((card, index) =>{
            return(
              <CatCard cardId={card.id} key={category.id + card.id} picture={card.pictureBase64} title={card.title}/>
            )
        })}
      </div>
    </>
  }
{!categoryLoaded &&
  <Loading/>
}
  </div>
  );
}

Category.protoTypes = {
fetchCategory : PropTypes.func.isRequired,

};

export default Category;