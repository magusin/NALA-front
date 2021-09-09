import React, { useEffect } from 'react';
import Loading from 'src/components/Loading';

import '../profil.scss';

const AddPost = ({
  title,
  picture,
  categories,
  changeButtonDisabled,
  fetchNewPost,
  handleChangeCategory,
  handleChangeTitle,
  fileSelectedHandler,
  buttonDisabled,

}) => {

  console.log(buttonDisabled)

  function manageSubmit(evt) {
    evt.preventDefault();
    changeButtonDisabled();
    fetchNewPost();
  }

   return (
    <form
      className="profil__section-post"
      onSubmit={(evt) => manageSubmit(evt)}
    >
    {(buttonDisabled === true) &&
    <Loading/>
    }
    {
      ((buttonDisabled === false) &&
        (  
          <>
            <div className="profil__section-post-field">
            <input
              type="file"
              placeholder="Poster une photo"
              id="picture"
              name="picture"
              accept="image/png, image/jpeg"
              required
              onChange={(evt) => fileSelectedHandler(evt.target.files[0])}
            />
          </div>
          <div className="profil__section-post-field">
            <label
              name="title"
            >
            </label>
            <input
              className="profil__section-input"
              placeholder="Titre"
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
              name="category"
            >Catégorie :&nbsp;
              <select className="profil__section-select" onChange={(evt) => handleChangeCategory(evt.target.value)}>
                {categories.map((category, index) => (
                  <>
                    {category.map((type) => (
                      <option className="profil__section-option" key={index + type.id} value={type.id}>{type.name}</option>
                    ))}
                  </>
                ))}
              </select>
            </label>
          </div>
          <button
            className="profil__section-button"
            type="submit"
            disabled={buttonDisabled}
          >
          Envoyer
          </button>
        </>
      )
    )}
    </form>

  );
};

export default AddPost;
