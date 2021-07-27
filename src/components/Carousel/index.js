import PropTypes from 'prop-types';
import React from 'react';
// import components
import Card from 'src/containers/Carousel/Card'
import './carousel.scss';

const Carousel = (
  {
    categoryId,
    list,
    handleNext,
    handlePrevious,    
    pages,
    page
  }
) =>{

  if(typeof pages !== 'undefined'){

    console.log(pages)

    if(pages.find(myPage => myPage.id == categoryId)){
      page = myPage.page;
    };

    // console.log(element);
  }
  

  

  return(
    <div className="carousel">
      <div className="carousel-nav">
        <button 
          className="carousel-nav-left" 
          disabled={page == 1 ? true : false} 
          onClick={() => (handlePrevious( categoryId, page ))}>

            <i className="bi bi-chevron-compact-left"></i>

        </button>

        <button 
          className="carousel-nav-right" 
          disabled={page == list.length ? true : false} 
          onClick={() => (handleNext( categoryId, page ))}>

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
  handlePrevious: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  // list: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     picture: PropTypes.string.isRequired,
  //     title: PropTypes.string.isRequired,
  //     id: PropTypes.number.isRequired
  //   }).isRequired,
  // ).isRequired,
};

Carousel.defaultProps = {
  page : 1,
}

export default Carousel;