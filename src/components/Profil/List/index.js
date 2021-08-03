import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './list.scss';

const List = ({
  cardId,
  picture,
  title,
}) => {

  const [selectedEdit, setSelectedEdit] = useState(false);
  const [selectedDelete, setSelectedDelete] = useState(false);

  function selectedEditMode(){
    console.log('in')
    setSelectedEdit(true);
    setSelectedDelete(false);
    console.log(selectedEdit, selectedDelete)
  }

  function selectedDeleteMode(){
    setSelectedEdit(false);
    setSelectedDelete(true);
  }

    function manageSubmit(evt){
    evt.preventDefault();
    }

return(
  <div className="list">
    <Link to={`/post/${cardId}`} >
      <div className="list-img" 
         style={{backgroundImage:`url(http://ec2-54-197-127-233.compute-1.amazonaws.com/uploads/pictures/${picture})`}}>
        <div className="list-img-effect"></div>
      </div>
    </Link>
    <div className="list-title">
      <span>{title}</span>
    </div>

    <div className="list-links">
        <div className={selectedEdit ? "list-links--edit selected" : "list-links--edit"} onClick={() => selectedEditMode()}><i className="bi bi-pencil-square"></i></div>
        <div className={selectedDelete ? "list-links--delete selected" : "list-links--delete"} onClick={() => selectedDeleteMode()}><i className="bi bi-x-circle-fill"></i></div>
        <div className={selectedEdit ? "list-links__container--edit selected" : "list-links__container--edit"}>
          <h2>Edition du post</h2>

          <form 
            className="profil__section-post"
            onSubmit={(evt) => manageSubmit(evt)}
          >
          <div className="profil__section-post-field">
            <label 
              name="title">
                Titre
            </label>
            <input 
              name="title"
              id="title"
              type="text" 
              minLength="5" 
              maxLength="255"
              required
              />
          </div>
      {/* <div className="profil__section-post-field">
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
      </div> */}
      <button
        className="profil__section-button"
      >
        Envoyer
      </button>
    </form>

        </div>
        <div className={selectedDelete ? "list-links__container--delete selected" : "list-links__container--delete"}>
            <h2 className="alert">Voulez-vous vraiment supprimer ce post ?</h2>
            <button>Oui</button> <button>Non</button>
        </div>
    </div>
  </div>
)};

export default List;
