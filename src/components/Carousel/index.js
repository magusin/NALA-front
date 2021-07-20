import PropTypes from 'prop-types';
import React from 'react';
// import components
import Card from './Card'
import './carousel.scss';

const Carousel = (
  {
    category,
    number,
    handleNext,
    handlePrevious,
  }
) =>{
  console.log('carousel', category)
return(
  <div className="carousel">
    <div className="carousel-nav">
      <button className="carousel-nav-left" disabled={number == 1 ? true : false} onClick={() => (handlePrevious(category))}><i className="bi bi-chevron-compact-left"></i></button>
      <button className="carousel-nav-right" disabled={number == 10 ? true : false} onClick={() => (handleNext(category))}><i className="bi bi-chevron-compact-right"></i></button>
    </div>
    <div className="carousel-sliders">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>

)};

Carousel.protoTypes = {
  category: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default Carousel;