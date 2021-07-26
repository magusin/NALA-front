import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// components
import Carousel from 'src/containers/Carousel';

import './home.scss';


const Home = (
  {carousel,
  fetchTopLove,
  fetchLastPosts,
  }
) => 
{
  useEffect(
    fetchTopLove,
    [],
  );

  useEffect(
    fetchLastPosts,
    [],
  );

  return(
    <div className="home">
      {carousel.map((carousel) =>{
        
        return(
        <div key={carousel.category}>
          <a href="#" className="title"><h2>{carousel.name} :</h2></a>
          <Carousel category={carousel.category} number={carousel.page}/>
        </div>
        )
      })}
    </div>
  );
};

Home.protoTypes = {
  fetchTopLove:PropTypes.func.isRequired,
  fetchLastPosts:PropTypes.func.isRequired,
  carousel: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      page: PropTypes.number.isRequired
    }).isRequired,
  ).isRequired,
  category: PropTypes.number.isRequired,
};

export default Home;
