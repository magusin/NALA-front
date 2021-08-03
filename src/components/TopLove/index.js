import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from 'src/components/Loading';
import CatCard from 'src/components/Categories/Category/CatCard';
import './topLove.scss';

const TopLove = ({
  fetchTopLove,
  topLove,
  topLoveLoaded,
}) => {
  useEffect(
    fetchTopLove,
    [],
  );

  return (
    <>
      {(topLoveLoaded && topLove != undefined)
      && (
        <div className="topLove">
          <h1>TopLove</h1>
          <div className="topLove__container">
            {topLove.map((card) =>{
                return(
                  <CatCard cardId={card.id} key={card.id} picture={card.picture} title={card.title}/>
                )
            })}
          </div>
        </div>
      )}
      {!topLoveLoaded &&
        <div className="topLove">
          <Loading/>
        </div>
      }

    </>
  );
};

TopLove.propTypes = {
  fetchTopLove: PropTypes.func.isRequired,
  topLove: PropTypes.array.isRequired,
  topLoveLoaded: PropTypes.bool.isRequired,
}

export default TopLove;
