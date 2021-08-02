import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import components
import Card from 'src/containers/Carousel/Card';
import './carousel.scss';

const Carousel = (
  {
    categoryId,
    list,
  },
) => {
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="carousel">
        <div className="carousel-nav">
          <button
            type="button"
            className="carousel-nav-left"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >

            <i className="bi bi-chevron-compact-left" />

          </button>

          <button
            type="button"
            className="carousel-nav-right"
            disabled={page === list.length || list.length == 0}
            onClick={() => setPage(page + 1)}
          >

            <i className="bi bi-chevron-compact-right" />

          </button>

        </div>
        <div className="carousel-sliders">
          {list.map((card, index) => (
            <Card cardPage={index + 1} cardId={card.id} key={`category${categoryId}_card${card.id}`} picture={card.pictureBase64} title={card.title} page={page} />
          ))}
        </div>
      </div>
    </>
  );
};

Carousel.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
  categoryId: PropTypes.number.isRequired,
};

export default Carousel;
