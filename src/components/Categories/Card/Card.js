import React from 'react';
import './card.scss';

const Card = () => (
  <div className="carousel-card" data-category="category" data-order="indexOfTable">
    <div className="carousel-card-img" 
        style={{backgroundImage:'url(https://www.ladn.eu/wp-content/uploads/2016/08/6356938644488566691013182599_grumpy-cat-1140x480.jpg?v=17)'}}>
      <div className="carousel-card-img-effect"></div>
    </div>
    <div className="carousel-card-title">
      <span>Mon chat est trop beau !</span>
    </div>
    <div className="carousel-card-links">
        <div className="carousel-card-links--like unselected"><i className="bi bi-heart-fill"></i></div>
        <div className="carousel-card-links--comment selected"><i className="bi bi-chat-left-text-fill"></i></div>
    </div>
  </div>
);

export default Card;