import React from 'react';
// import components
import Card from './Card'
import './carousel.scss';

const Carousel = (
  carousel,
  category,
) => (
  <div className="carousel">
    <div className="carousel-nav">
      <div className="carousel-nav-left" disabled={carousel[category] == 1 ? true : false}><i className="bi bi-chevron-compact-left"></i></div>
      <div className="carousel-nav-right" disabled={carousel[category] == 10 ? true : false}><i className="bi bi-chevron-compact-right"></i></div>
    </div>
    <div className="carousel-sliders">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>

);

Carousel.Prototype {
  carousel:
}

export default Carousel;