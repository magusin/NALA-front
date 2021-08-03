/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './profil.scss';
import AddPost from 'src/containers/Profil/AddPost';
import List from 'src/containers/Profil/List';

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
    <h2 className="profil__title">Ajouter une nouvelle image</h2>
    <AddPost/>
    <h2 className="profil__title">Mes postes</h2>
    <List/>
  </div>
);

export default Profil;
