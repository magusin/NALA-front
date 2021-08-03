import React, { useEffect, useState } from 'react';
import Loading from 'src/components/Loading';
import Post from './Post';

import './list.scss';

const List = ({
  fetchUserPosts,
  userPosts,
}) => {

  useEffect(
    fetchUserPosts,
    [],
  );

  console.log(userPosts)
  return(
    <div className="list">
    {/* {categoryLoaded &&
      <>
        <div className="category__container">
          {posts.map((card, index) =>{
              return(
                <Post cardId={card.id} key={category.id + card.id} picture={card.picture} title={card.title}/>
              )
          })}
        </div>
      </>
    }
    {!categoryLoaded &&
      <Loading/>
    } */}
    <Post/>
    </div>
  );
}

export default List;
