
import React from 'react';

// components
import Carousel from './Carousel';

import './home.scss';

const Home = () => (
  <div className="home">
    <h2 className="home-category">Top-Love :</h2>
    <Carousel/>
    <h2 className="home-category">Dernières publications :</h2>
    <Carousel/>
  </div>
);

export default Home;
