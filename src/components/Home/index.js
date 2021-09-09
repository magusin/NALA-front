import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from 'src/components/Loading';

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
    fetchTopLove, [],
  );

  useEffect(
    fetchLastPosts, [],
  );

  return (
    <div className="home">

      {
            ((lastPostsLoaded && lastPosts !== undefined)
                && (
                <div className="home__container">
                  <h1 className="home__title"> Nos 10 dernières publications </h1>
                  <Carousel
                    list={lastPosts}
                    categoryId="lastPosts"
                  />
                </div>
                )
            )
        }
        {
            ((lastPostsLoaded == false) &&
                <Loading />
            )
        }
      {
            ((topLoveLoaded && topLove !== undefined)
                && (
                <div className="home__container">
                  <Link to="/topLove" className="home__title">
                    <h2> TopLove </h2>
                  </Link>
                  <Carousel list={topLove} categoryId="topLove" />
                </div>
                )
            )
        }
        {
            ((topLoveLoaded == false) &&
                <Loading />
            )
        }

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
