import React from 'react';

import './card.scss';

const Card = () => (
  <div className="carousel-card">
    <div className="carousel-card-img">
      <img src="https://www.ladn.eu/wp-content/uploads/2016/08/6356938644488566691013182599_grumpy-cat-1140x480.jpg?v=17" />
    </div>
    <div className="carousel-card-title">
      <span>Mon chat est trop beau !</span>
    </div>
    <div className="carousel-card-links">
      <ul>
        <li><i class="bi bi-heart-fill"></i></li>
        <li><i class="bi bi-chat-left-text-fill"></i></li>
      </ul>
    </div>
  </div>
);

export default Card;
