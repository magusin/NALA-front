import React from 'react';
import './profil.scss';

export default function Profil() {
  return (
    <div className="profil">
      <h1 className="profil-title">Profil</h1>
      <section className="profil__section">
        <div className="profil__section-text">
          <i className="bi bi-person-circle" />
        </div>
        <div className="profil__section-text">
          <p>Pseudo</p>
          <p>Nom</p>
          <p>Prénom</p>
        </div>
        <div className="profil__section-text">
          <p>Email</p>
          <p>Mot de passe</p>
          <p>Age</p>
        </div>
        <div className="profil__section-text-2">
          <button className="profil__button" type="button">Modifier</button>
        </div>
        <div className="profil__section-text profil__section-text-3">
          <button className="profil__button" type="button">Supprimer le compte</button>
          <input type="text" />
        </div>
      </section>
      <section className="profil__section-bis">
        <img height="160" src="https://react.semantic-ui.com/images/wireframe/square-image.png" alt="" />
        <input type="text" />
        <div className="profil__section-text-2">
          <button className="profil__button" type="button">Envoyer</button>
        </div>
      </section>
      <h2 className="profil-title">Mes postes</h2>
      <section className="poste" />
    </div>
  );
}
