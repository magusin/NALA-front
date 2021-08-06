import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './post.scss';

const Post = ({
  cardId,
  picture,
  title,
  categoryId,
  deletePost,
  editPost,
  categories,
  categorySelected,
  handleChangeTitle,
  handleChangeCategory,
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
    setSelectedEdit(false);
    editPost(cardId)
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
        >
          <div className="post__section-post-field">
            <input 
              name="title"
              type="text" 
              minLength="1" 
              maxLength="255"
              placeholder="Titre"
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
                      <option key={index + type.id} value={type.id} selected={type.id == categoryId ? true : false}>{type.name}</option>
                    ))}
                  </>
                ))}
              </select>
            </label>
          </div>
          <button
            className="post__section-button"
            onClick={(evt) => manageSubmit(evt)}
          >
            Modifier
          </button>
          <button 
            onClick={(evt) => evt.preventDefault() + setSelectedEdit(false)}
          >
            Fermer
          </button>
        </form>

      </div>
      <div className={selectedDelete ? "post-links__container--delete selected" : "post-links__container--delete"}>
          <h2 className="alert">Supprimer ?</h2>
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
