import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.scss';


const Card = ({
  cardId,
  picture,
  title,
  page,
  isLogged,
}) => {

  let cardNextPrevious = (page, cardId) =>{
      if(page < cardId){
        return 'carousel-card next';
      }else if(page > cardId){
        return 'carousel-card previous';
      }else{
        return 'carousel-card';
      }
  }

  console.log('page', page)
  console.log(cardId)

  let cardSelected = (page, cardId) =>{
    if(page == cardId){
          return 'selected'
    }
    else{
      return '';
    }
  }

return(
  <div className={cardNextPrevious(page, cardId) + ' ' + cardSelected(page, cardId)}>
    <Link to={`/post/${cardId}`} >
      <div className="carousel-card-img" 
         style={{backgroundImage:`url(data:image/png;base64,${picture})`}}>
        <div className="carousel-card-img-effect"></div>
      </div>
    </Link>
    <div className="carousel-card-title">
      <span>{title}</span>
    </div>

{isLogged &&
    <div className="carousel-card-links">
        <div className="carousel-card-links--like unselected"><i className="bi bi-heart-fill"></i></div>
        <div className="carousel-card-links--comment unselected"><i className="bi bi-chat-left-text-fill"></i></div>
    </div>
}
  </div>
)};

Card.protoTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Card;


