import React from 'react';

import './card.scss';

const Card = () => (
  <>
  <div className="carousel-card">
    <div className="carousel-card-img" 
         style={{backgroundImage:'url(https://www.ladn.eu/wp-content/uploads/2016/08/6356938644488566691013182599_grumpy-cat-1140x480.jpg?v=17)'}}>
      <div className="carousel-card-img-effect"></div>
    </div>
    <div className="carousel-card-title">
      <span>Mon chat est trop beau !</span>
    </div>
    <div className="carousel-card-links">
        <div><i className="bi bi-heart-fill"></i></div>
        <div><i className="bi bi-chat-left-text-fill"></i></div>
    </div>
  </div>
  <div className="carousel-card">
    <div className="carousel-card-img" 
         style={{backgroundImage:'url(https://www2.pictorem.com/collection/900_Johan-Swanepoel_001120Ps5.jpg)'}}>
      <div className="carousel-card-img-effect"></div>
  </div>
    <div className="carousel-card-title">
      <span>Rhinoshield peut retourner se brosser !</span>
    </div>
    <div className="carousel-card-links">
        <div><i className="bi bi-heart-fill"></i></div>
        <div><i className="bi bi-chat-left-text-fill"></i></div>
    </div>
  </div>
  </>
);

export default Card;
