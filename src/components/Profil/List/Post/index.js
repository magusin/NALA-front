import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './post.scss';

const Post = ({
  cardId,
  picture,
  title,
  deletePost,
  editPost,
  changePost,
  categories,
}) => {

  const [selectedEdit, setSelectedEdit] = useState(false);
  const [selectedDelete, setSelectedDelete] = useState(false);

  function selectedEditMode(){
    setSelectedEdit(true);
    setSelectedDelete(false);
  }

  function selectedDeleteMode(){
    setSelectedEdit(false);
    setSelectedDelete(true);
  }

    function manageSubmit(evt){
    evt.preventDefault();
    changePost();
    }

return(
  <div className="post">
    <Link to={`/post/${cardId}`} >
      <div className="post-img" 
         style={{backgroundImage:`url(http://ec2-54-197-127-233.compute-1.amazonaws.com/uploads/pictures/${picture})`}}>
        <div className="post-img-effect"></div>
      </div>
    </Link>
    <div className="post-title">
      <span>{title}</span>
    </div>

    <div className="post-links">
      <div className={selectedEdit ? "post-links--edit selected" : "post-links--edit"} onClick={() => selectedEditMode()}><i className="bi bi-pencil-square"></i></div>
      <div className={selectedDelete ? "post-links--delete selected" : "post-links--delete"} onClick={() => selectedDeleteMode(cardId)}><i className="bi bi-x-circle-fill"></i></div>
      <div className={selectedEdit ? "post-links__container--edit selected" : "post-links__container--edit"}>
        <h2>Edition du post</h2>

        <form 
          className="post__section-post"
          onSubmit={(evt) => manageSubmit(evt)}
        >
          <div className="post__section-post-field">
            <label 
              name="title">
                Titre
            </label>
            <input 
              name="title"
              id="editTitle"
              type="text" 
              minLength="5" 
              maxLength="255"
              onChange={(evt) => handleChangeTitle(evt.target.value)}
            />
          </div>
          <div className="post__section-post-field">
            <label
              name="category">Catégorie :
              <select onChange={(evt) => handleChangeCategory(evt.target.value)}>
                {categories.map((category, index) => (
                  <>
                    {category.map((type) => (
                      <option key={index + type.id} value={type.id}>{type.name}</option>
                    ))}
                  </>
                ))}
              </select>
            </label>
          </div>
          <button
            className="post__section-button"
            onClick={() => editPost(cardId)}
          >
            Modifier
          </button>
        </form>

      </div>
      <div className={selectedDelete ? "post-links__container--delete selected" : "post-links__container--delete"}>
          <h2 className="alert">Voulez-vous vraiment supprimer ce post ?</h2>
          <button
            onClick={() => deletePost(cardId)}>
            Oui
          </button> 
          <button 
            onClick={() => setSelectedDelete(false)}
          >
            Non
          </button>
      </div>
    </div>
  </div>
)};

export default Post;
