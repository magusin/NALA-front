import React, { useEffect } from 'react';
import Loading from 'src/components/Loading';
import Post from 'src/containers/Profil/List/Post';

import './list.scss';

const List = ({
  fetchUserPosts,
  userPosts,
  categories,
  userPostsLoaded,
  notification,
}) => {

  useEffect(
    fetchUserPosts,
    [],
  );


  if(userPostsLoaded){
    var list = userPosts.posts;
  }

    return(
      <div className="list">
        <div className="list-notification">
          {notification == 201 &&
            <span className="info-edit"><i class="bi bi-check-circle-fill"></i> l'image à bien été modifié</span>
          }
          {notification == 204 &&
            <span className="info-delete"><i class="bi bi-check-circle-fill"></i> l'image a bien été supprimé</span>
          }
          {notification == "Error" &&
            <span className="info-error"><i className="bi bi-x-circle-fill"></i> Une erreur est survenue</span>
          }
        </div>
        {userPostsLoaded && 
          <>
            <div className="category__container">
              {list.map((card, index) =>{
                console.log(card);
                  return(
                    <Post cardId={card.id} key={card.id} picture={card.picture} title={card.title} categories={categories}/>
                  )
              })} 
            </div>
          </>
        }
        {!userPostsLoaded &&
          <Loading/>
        }
      </div>
    );

  

}

export default List;
