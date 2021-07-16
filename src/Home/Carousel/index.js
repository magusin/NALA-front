import React from 'react';

// import components
import Card from './Card'

import './carousel.scss';

const Carousel = () => (

  <div className="carousel">
    <div className="carousel-nav">
      <div className="carousel-nav-left"><i className="bi bi-chevron-compact-left"></i></div>
      <div className="carousel-nav-right"><i className="bi bi-chevron-compact-right"></i></div>
    </div>
    <div className="carousel-sliders">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>

);

export default Carousel;
