import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Card = ({
  cardId,
  picture,
  title,
  page,
}) => {
console.log('id', cardId,'/page', page)
return(
  <div className={page == cardId ? 'carousel-card selected' : 'carousel-card' }>
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
};

export default Card;