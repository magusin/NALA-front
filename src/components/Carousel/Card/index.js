import React from 'react';
import PropTypes, { string } from 'prop-types';
import './card.scss';

const Card = ({
  cardId,
  picture,
  title,
  page,
  buttonEffect,
}) => {

  let cardEffect = (page, cardId) =>{
    if(page == cardId){
          return 'carousel-card selected'
    }else{
      if(page < cardId){
        return 'carousel-card next';
      }else if(page > cardId){
        return 'carousel-card previous';
      }
    }
  }

return(
  <div className={cardEffect(page, cardId, buttonEffect)}>
    <div className="carousel-card-img" 
         style={{backgroundImage:'url('+picture+')'}}>
      <div className="carousel-card-img-effect"></div>
    </div>
    <div className="carousel-card-title">
      <span>{title}</span>
    </div>
    <div className="carousel-card-links">
        <div className="carousel-card-links--like unselected"><i className="bi bi-heart-fill"></i></div>
        <div className="carousel-card-links--comment selected"><i className="bi bi-chat-left-text-fill"></i></div>
    </div>
  </div>
)};

Card.protoTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  buttonEffect: PropTypes.string.isRequired,
};

export default Card;


