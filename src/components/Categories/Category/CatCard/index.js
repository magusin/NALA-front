import React from 'react';
import { Link } from 'react-router-dom';

import './catCard.scss';

const CatCard = ({
  cardId,
  picture,
  title,
  isLogged,
}) => {

return(
  <div className="catCard">
    <Link to={`/post/${cardId}`} >
      <div className="catCard-img" 
         style={{backgroundImage:`url(data:image/png;base64,${picture})`}}>
        <div className="catCard-img-effect"></div>
      </div>
    </Link>
    <div className="catCard-title">
      <span>{title}</span>
    </div>

{isLogged &&
    <div className="catCard-links">
        <div className="catCard-links--like unselected"><i className="bi bi-heart-fill"></i></div>
        <div className="catCard-links--comment unselected"><i className="bi bi-chat-left-text-fill"></i></div>
    </div>
}
  </div>
)};

export default CatCard;
