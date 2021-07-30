/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './profil.scss';

const Profil = ({
  profilPseudo,
  newProfilPseudo,
  profilName,
  newProfilName,
  profilFirstname,
  newProfilFirstname,
}) => (
  <div className="profil">
    <h1 className="profil__title">Profil</h1>
    <div className="profil__section">
      <div className="profil__section-text">
        <p>Pseudo : {profilPseudo}</p>
        <p>Nom : {profilName}</p>
        <p>Prénom : {profilFirstname}</p>
      </div>
      <div className="profil__section-update">
        <form
          className="profil__section-form"
          onSubmit={(evt) => {
            evt.preventDefault();
          }}
        >
          <div>
            <input
              className="profil__section-input"
              type="text"
              placeholder="Pseudo"
              value={profilPseudo}
              onChange={(evt) => newProfilPseudo(evt.target.value)}
            />
          </div>
          <div>
            <input
              className="profil__section-input"
              type="text"
              placeholder="Nom"
              value={profilName}
              onChange={(evt) => newProfilName(evt.target.value)}
            />
          </div>
          <div>
            <input
              className="profil__section-input"
              type="text"
              placeholder="Prénom"
              value={profilFirstname}
              onChange={(evt) => newProfilFirstname(evt.target.value)}
            />
          </div>
          <button
            className="profil__section-button"
            type="submit"
          >
            Modifier
          </button>
        </form>
      </div>
    </div>
    <h2 className="profil__title">Mes postes</h2>
    <div className="profil__section-post">
      <input
        className="profil__section-input"
        type="file"
        placeholder="Poster une photo"
        id="post"
        name="post"
        accept="image/png, image/jpeg"
      />
    </div>
  </div>
);

export default Profil;
