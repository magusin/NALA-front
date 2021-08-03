import React, { useEffect } from 'react';
import Loading from 'src/components/Loading';
import Post from './Post';

import './list.scss';

const List = ({
  fetchUserPosts,
  userPosts,
  categories,
  userPostsLoaded,
}) => {

  useEffect(
    fetchUserPosts,
    [],
  );

  {userPostsLoaded &&
    console.log(userPosts);
    let list = userPosts.posts;

    return(
      <div className="list">
        <>
          <div className="category__container">
            {list.map((card, index) =>{
                return(
                  <Post cardId={card.id} key={category.id + card.id} picture={card.picture} title={card.title} categories={categories}/>
                )
            })} 
          </div>
        </>
      </div>
    );
  };
  
  {!userPostsLoaded &&
    <Loading/>
  };
}

export default List;
