import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import components
import Card from 'src/containers/Carousel/Card'
import './carousel.scss';

const Carousel = (
  {
    categoryId,
    list,
  }
) =>{

  const [page, setPage] = useState(1);
  

  return(
    <div className="carousel">
      <div className="carousel-nav">
        <button 
          className="carousel-nav-left" 
          disabled={page == 1 ? true : false} 
          onClick={() => setPage(page - 1)}>

            <i className="bi bi-chevron-compact-left"></i>

        </button>

        <button 
          className="carousel-nav-right" 
          disabled={page == list.length ? true : false} 
          onClick={() => setPage(page + 1)}>

            <i className="bi bi-chevron-compact-right"></i>

        </button>

      </div>
      <div className="carousel-sliders">     
          {list.map((card) =>{
          return(
            <Card cardId={card.id} key={"category" + categoryId + "_card" + card.id} picture={card.pictureBase64} title={card.title} page={page}/>
          )
        })}
      </div>
    </div>

  )
};

Carousel.protoTypes = {
  categoryId: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired,
  ).isRequired,
};


export default Carousel;