/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({
  // eslint-disable-next-line react/prop-types
  cardPage,
  cardId,
  picture,
  title,
  page,
  // eslint-disable-next-line react/prop-types
  isLogged,
}) => {
  const cardNextPrevious = (page, cardId) => {
    if (page < cardId) {
      return 'carousel-card next';
    } if (page > cardId) {
      return 'carousel-card previous';
    }
    return 'carousel-card';
  };

  const cardSelected = (page, cardId) => {
    if (page === cardId) {
      return 'selected';
    }

    return '';
  };

  return (
    <div className={`${cardNextPrevious(page, cardPage)} ${cardSelected(page, cardPage)}`}>
      <Link to={`/post/${cardId}`}>
        <div
          className="carousel-card-img"
          style={{ backgroundImage: `url('http://ec2-54-197-127-233.compute-1.amazonaws.com/uploads/pictures/${picture}')` }}
        >
          <div className="carousel-card-img-effect" />
        </div>
      </Link>
      <div className="carousel-card-title">
        <span>{title}</span>
      </div>

      {isLogged
    && (
    <div className="carousel-card-links">
      <div className="carousel-card-links--like unselected"><i className="bi bi-heart-fill" /></div>
      <div className="carousel-card-links--comment unselected"><i className="bi bi-chat-left-text-fill" /></div>
    </div>
    )}
    </div>
  );
};

Card.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

export default Card;
