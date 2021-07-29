import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Comment from 'src/containers/Picture/Comment';
import { Link } from 'react-router-dom';

import './picture.scss';
import Loading from '../Loading';

const Picture = ({
  fetchPostWithId, 
  isReady,
  picture,
  displayComments,
  changeDisplay,
  isLogged,
  resetPicture,
  pageId,
}) => {

  useEffect(
    fetchPostWithId,
    [],
  );

  if(!isReady || picture.id != pageId){
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
        <Link to='/categories'>
          <button className="picture-top-close" onClick={() => resetPicture()}>Retour aux catégories <i class="bi bi-box-arrow-in-right"></i></button>
        </Link>
      </div>

      <div className="picture-img">
        <img src={`data:${picture.picture};base64,${picture.pictureBase64}`} alt=""/>
      </div>

      <div className="picture__bottom">
        <div className="picture__bottom-links">
          {isLogged &&
            <button><i className="bi bi-heart-fill"></i></button>
          }
          <button onClick={() =>(changeDisplay())}><i className="bi bi-chat-left-text-fill"></i></button>
        </div>

        <div className={displayComments ? "picture__bottom-comments active" : "picture__bottom-comments"}>
          {isLogged &&
            <form className="picture__bottom-comments-add">
              <textarea></textarea>
              <button>Poster</button>
            </form>
          }
          {displayComments &&(
            <div className="picture__bottom-comments-section">

              {picture.comment.map((comment) => (
                <Comment key={comment.id} description={comment.description} createdAt={comment.createdAt}/>
              ))}
              { (picture.comment == null || picture.comment == '' || picture.comment == undefined) && 
                <div>Soyez le premier à laisser un commentaire ! <i className="bi bi-emoji-wink-fill"></i></div>
              }
            </div> 
          )}      
        </div>

      </div>
      
    </div>
  );

};

Picture.protoTypes = {
  resetPicture: PropTypes.func.isRequired,
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
  displayComments: PropTypes.bool.isRequired,
  changeDisplay: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
}

export default Picture;
