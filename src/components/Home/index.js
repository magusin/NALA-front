import React from 'react';
import PropTypes from 'prop-types';

// components
import Carousel from 'src/containers/Carousel';

import './home.scss';

const Home = (
  {carousel}
) => (
  <div className="home">
    {carousel.map((carousel) =>(
      <div key={carousel.category}>
        <h2>{carousel.name}</h2>
        <Carousel number={carousel.number}/>
      </div>
    ))}
  </div>
);

Home.protoTypes = {
  carousel: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired
    }).isRequired,
  ).isRequired,
  category: PropTypes.number.isRequired,
};

export default Home;