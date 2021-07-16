import React from 'react';

// import components
import Card from './Card'

import './carousel.scss';

const Carousel = () => (
<div className="carousel">
    <div className="carousel-container">
      <div className="carousel-container-nav">
        <div className="carousel-container-nav-left"><i class="bi bi-chevron-compact-left"></i></div>
        <div className="carousel-container-nav-right"><i class="bi bi-chevron-compact-right"></i></div>
      </div>
      <div className="carousel-container-slider">
        <Card/>
      </div>
      <div className="carousel-container-bullets">

      </div>
    </div>
</div>
);

export default Carousel;
