
import React from 'react';

import './home.scss';

const Home = () => (
  <div className="home">
    <h2>Top-Love :</h2>
    <Carousel/>
    <h2>Dernières publications :</h2>
    <Carousel/>
  </div>
);

export default Home;
