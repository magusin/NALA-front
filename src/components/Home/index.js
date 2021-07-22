import React from 'react';
import PropTypes from 'prop-types';

// components
import Carousel from 'src/containers/Carousel';

import './home.scss';

const Home = (
  {carousel}
) => (
  <div className="home">
    {carousel.map((carousel) =>{
      
      return(
      <div key={carousel.category}>
        <h2>{carousel.name} :</h2>
        <Carousel category={carousel.category} number={carousel.page}/>
      </div>
      )
    })}
  </div>
);

Home.protoTypes = {
  carousel: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      page: PropTypes.number.isRequired
    }).isRequired,
  ).isRequired,
  category: PropTypes.number.isRequired,
};

export default Home;