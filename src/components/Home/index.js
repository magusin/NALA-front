import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// components
import Carousel from 'src/components/Carousel';

import './home.scss';

const Home = ({
  topLoveLoaded,
  lastPostsLoaded,
  topLove,
  lastPosts,
  fetchTopLove,
  fetchLastPosts,
}) => {
  useEffect(
    fetchTopLove,
    [],
  );

  useEffect(
    fetchLastPosts,
    [],
  );

  return (
    <div className="home">

      {((lastPostsLoaded && lastPosts !== undefined)
        && (
        <div>
          <a href="#" className="title"><h2>Les dernières publications</h2></a>
          <Carousel list={lastPosts} categoryId="lastPosts" />
        </div>
        )
)}
      {((topLoveLoaded && topLove !== undefined)
        && (
        <div>
          <a href="#" className="title"><h2>Nos coups de Coeur</h2></a>
          <Carousel list={topLove} categoryId="topLove" />
        </div>
        )
)}

    </div>
  );
};

Home.propTypes = {
  fetchTopLove: PropTypes.func.isRequired,
  fetchLastPosts: PropTypes.func.isRequired,
  topLoveLoaded: PropTypes.bool.isRequired,
  lastPostsLoaded: PropTypes.bool.isRequired,
  // topLove: PropTypes.array.isRequired,
  // lastPosts: PropTypes.string.isRequired,
};

export default Home;
