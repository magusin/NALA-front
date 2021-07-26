import PropTypes from 'prop-types';
import React from 'react';
// import components
import Card from 'src/containers/Carousel/Card'
import './carousel.scss';

const Carousel = (
  {
    category,
    number,
    handleNext,
    handlePrevious,
    list,
  }
) =>{
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
        disabled={number == list.length ? true : false} 
        onClick={() => (handleNext( category ))}>

          <i className="bi bi-chevron-compact-right"></i>

      </button>

    </div>
    <div className="carousel-sliders">     
        {list.map((card) =>{
        return(
          <Card cardId={card.id} key={card.id} picture={card.url} title={card.title} page={number}/>
        )
      })}
    </div>
  </div>

)};

Carousel.protoTypes = {
  category: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired,
  ).isRequired,
};

export default Carousel;