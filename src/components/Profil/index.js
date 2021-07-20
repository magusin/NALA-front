import React from 'react';
import './profil.scss';



export default function Profil() {
  return (
    <>
    <center><h1 className="profil">Profil</h1></center>
  <section className= "grid">
      <div className="grid-1">
        <img height="130" src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
      </div>
      <div className="grid-1">
        <p>Pseudo</p>
        <p>Nom</p>
        <p>Prénom</p>
      </div>
      <div className="grid-1">
        <p>Email</p>
        <p>Mot de passe</p>
        <p>Age</p>
      </div>
      <div className="grid-2">
        <button type="button">Modifier</button>
      </div>
      <div className="grid-1 grid-3">
        <button type="button">Supprimer le compte</button>
        <input type="text"/>
      </div>
  </section>
  <section className="flex">
    <img height="160" src="https://react.semantic-ui.com/images/wireframe/square-image.png" alt=""/>
  <input type="text"/>
  <div className="grid-2">
    <button type="button">Envoyer</button>
  </div>
  </section>
  <center><h2>Mes postes</h2></center>
  <section className="poste">

    <img src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
    <img src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
    <img src='https://react.semantic-ui.com/images/wireframe/square-image.png' />

  <img src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
  <img src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
  <img src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
  </section>
  </>
  );
}
