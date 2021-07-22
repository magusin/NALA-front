import React from 'react';
import './profil.scss';
import Card from '/src/components/Carousel/Card';



export default function Profil() {
  return (
    <div className="profil">
      <h1 className="profil-title">Profil</h1>
      <section className= "profil-grid">
          <div className="profil-grid-1">
            <img height="130" src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
          </div>
          <div className="profil-grid-1">
            <p>Pseudo</p>
            <p>Nom</p>
            <p>Prénom</p>
          </div>
          <div className="profil-grid-1">
            <p>Email</p>
            <p>Mot de passe</p>
            <p>Age</p>
          </div>
          <div className="profil-grid-2">
            <button type="button">Modifier</button>
          </div>
          <div className="profil-grid-1 profil-grid-3">
            <button type="button">Supprimer le compte</button>
            <input type="text"/>
          </div>
      </section>
      <section className="profil-flex">
        <img height="160" src="https://react.semantic-ui.com/images/wireframe/square-image.png" alt=""/>
        <input type="text"/>
        <div className="profil-grid-2">
          <button type="button">Envoyer</button>
        </div>
      </section>
    <h2>Mes postes</h2> 
    <section className="poste">
      <Card/>
    </section>
  </div>
  );
}
