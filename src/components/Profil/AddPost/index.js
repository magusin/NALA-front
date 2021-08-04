import React, { useEffect } from 'react';

import '../profil.scss';

const AddPost = ({
  categories,
  categoriesLoaded,
  fetchCategories,
  fetchNewPost,
  handleChangeCategory,
  handleChangeTitle,
  fileSelectedHandler,
  fileUploadHandler,

}) =>{ 

  if(!categoriesLoaded){
    useEffect(
      fetchCategories,
      []
    )
  }

  function manageSubmit(evt){
    evt.preventDefault();
    fetchNewPost()
  }

  console.log(categories)

  return(
    <form 
      className="profil__section-post"
      onSubmit={(evt) => manageSubmit(evt)}>
      <div className="profil__section-post-field">
        <input
          className="profil__section-input"
          type="file"
          placeholder="Poster une photo"
          id="picture"
          name="picture"
          accept="image/png, image/jpeg"
          required
          onChange={(evt)=>fileSelectedHandler(evt.target.files[0])}
        />
      </div>
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
          onChange={(evt) => handleChangeTitle(evt.target.value)}
          />
      </div>
      <div className="profil__section-post-field">
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
        className="profil__section-button"
        onClick={() => fileUploadHandler()}>Envoyer</button>
    </form>

  );
}

export default AddPost;
