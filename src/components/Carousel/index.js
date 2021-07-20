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
    cardId
  }
) =>{
  console.log('carousel', category)
return(
  <div className="carousel">
    <div className="carousel-nav">
      <button 
        className="carousel-nav-left" 
        disabled={number == 1 ? true : false} 
        onClick={() => (handlePrevious( category ))}>

          <i className="bi bi-chevron-compact-left"></i>

      </button>

      <button 
        className="carousel-nav-right" 
        disabled={number == 10 ? true : false} 
        onClick={() => (handleNext( category ))}>

          <i className="bi bi-chevron-compact-right"></i>

      </button>

    </div>
    <div className="carousel-sliders">
      <Card number={number}/>
      <Card number={number}/>
      <Card number={number}/>
      <Card number={number}/>
      <Card number={number}/>
    </div>
  </div>

)};

Carousel.protoTypes = {
  category: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  cardId: PropTypes.number.isRequired,
};

Carousel.defaultProps = {
  cardId: 3,
}

export default Carousel;