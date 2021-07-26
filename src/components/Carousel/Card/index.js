import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.scss';


const Card = ({
  cardId,
  picture,
  title,
  page,
  buttonEffect,
}) => {

  let cardNextPrevious = (page, cardId, buttonEffect) =>{
      if(page < cardId){
        return 'carousel-card next';
      }else if(page > cardId){
        return 'carousel-card previous';
      }else if(buttonEffect == "next"){
        return 'carousel-card next';
      }else if(buttonEffect == "previous"){
        return 'carousel-card previous';
      }else{
        return 'carousel-card';
      }
  }

  let cardSelected = (page, cardId) =>{
    if(page == cardId){
          return 'selected'
    }
    else{
      return '';
    }
  }

return(
  <div className={cardNextPrevious(page, cardId, buttonEffect) + ' ' + cardSelected(page, cardId)}>
    <Link to={`/post/${cardId}`} >
      <div className="carousel-card-img" 
         style={{backgroundImage:`url(${picture})`}}>
        <div className="carousel-card-img-effect"></div>
      </div>
    </Link>
    <div className="carousel-card-title">
      <span>{title}</span>
    </div>
    <div className="carousel-card-links">
        <div className="carousel-card-links--like unselected"><i className="bi bi-heart-fill"></i></div>
        <div className="carousel-card-links--comment unselected"><i className="bi bi-chat-left-text-fill"></i></div>
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


