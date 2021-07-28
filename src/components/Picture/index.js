import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import Comment from 'src/containers/Picture/Comment';

import './picture.scss';
import Loading from '../Loading';

const Picture = ({
  fetchPostWithId, 
  isReady,
  picture,
  displayComments,
  changeDisplay,
  isLogged,
  comments,
}) => {

  useEffect(
    fetchPostWithId,
    [],
  );

  // useLocation nous renvoi la location courante (l'url en gros)
  // notre composant sera rendu à nouveau dès que la location change
  const location = useLocation();

  // Hook pour remettre le scroll tout en haut à chaque rechargement de la page
  useEffect(
    () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    [location],
  );

  if(!isReady){
    return (
      <div className="picture">
        <Loading/>
      </div>
    );
  };

  return(
    <div className="picture">

      <div className="picture-top">
        <div className="picture-top-title">{picture.title}</div>
        <button className="picture-top-close">X</button>
      </div>

      <div className="picture-img">
        <img src={`data:${picture.picture};base64,${picture.pictureBase64}`} alt=""/>
      </div>

      <div className="picture__bottom">
        <div className="picture__bottom-links">
          <button><i className="bi bi-heart-fill"></i></button>
          <button onClick={() =>(changeDisplay())}><i className="bi bi-chat-left-text-fill"></i></button>
        </div>

        <div className={displayComments ? "picture__bottom-comments active" : "picture__bottom-comments"}>
          {isLogged &&
            <form className="picture__bottom-comments-add">
              <textarea></textarea>
              <button>Poster</button>
            </form>
          }
          {displayComments &&

          <div className="picture__bottom-comments-section">
            {comments.map((comment) => (
            <Comment key={comment.id} user={comment.user} description={comment.description} createdAt={comment.createdAt}/>
            ))}
          </div> 
          }         
        </div>

      </div>
      
    </div>
  );

};

Picture.protoTypes = {
  displayComments: PropTypes.bool.isRequired,
  fetchPostWithId: PropTypes.func.isRequired,
  isReady: PropTypes.bool.isRequired,
  picture: PropTypes.shape({
    pictureBase64: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      nickname: PropTypes.string.isRequired,
    }),
  }),
}

export default Picture;
