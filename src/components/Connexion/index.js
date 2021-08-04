import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './connexion.scss';

const Connexion = ({
  handleSelectConnexion,
  handleSelectInscription,
  connexionSelect,
  inscriptionSelect,
  newConnexionEmail,
  setNewConnexionEmail,
  newConnexionPassword,
  setNewConnexionPassword,
  newRegisterEmail,
  setNewRegisterEmail,
  newRegisterPseudo,
  setNewRegisterPseudo,
  newRegisterPassword,
  setNewRegisterPassword,
  manageSubmitRegister,
  manageSubmitConnexion,
  isLogged,

}) => {
  const handleSubmitRegister = (evt) => {
    evt.preventDefault();

    manageSubmitRegister();
  };

  const handleSubmitConnexion = (evt) => {
    evt.preventDefault();

    manageSubmitConnexion();
  };

  return (
    <div className="connexion">
      <h2 className={inscriptionSelect ? 'connexion__title active' : 'connexion__title'}> Inscription </h2>
      <h2 className={connexionSelect ? 'connexion__title active' : 'connexion__title'}> Connexion </h2>
      {isLogged
        && (
        <div className="connexion__container">
          <div className="connexion__container_body">
            Vous êtes connectés.
            <Redirect to="/" />
          </div>
        </div>
        )}
      <div className="connexion__container">
        <div className="connexion__container_top">
          <button
            type="button"
            className={connexionSelect ? 'connexion__container_top-link active' : 'connexion__container_top-link'}
            data-ref="connexion"
            href="#"
            onClick={() => (handleSelectConnexion())}
          >Connexion
          </button>
          <button
            type="button"
            className={inscriptionSelect ? 'connexion__container_top-link active' : 'connexion__container_top-link'}
            data-ref="inscription"
            href="#"
            onClick={() => (handleSelectInscription())}
          >Inscription
          </button>
        </div>

        <div className="connexion__container_body">

          <form
            className={connexionSelect ? 'connexion__container_body-form active' : 'connexion__container_body-form'}
            onSubmit={handleSubmitConnexion}
          >
            <div className="connexion__container_body-row">
              <i className="bi bi-envelope" />
              <input
                type="email"
                className="input"
                placeholder="Adresse Mail"
                value={newConnexionEmail}
                onChange={(evt) => setNewConnexionEmail(evt.target.value)}
              />
            </div>
            <div className="connexion__container_body-row">
              <i className="bi bi-lock" />
              <input
                placeholder="Mot de Passe"
                type="password"
                className="input"
                value={newConnexionPassword}
                onChange={(evt) => setNewConnexionPassword(evt.target.value)}
              />
            </div>
            <a href="#" className="link">Mot de passe oublié ?</a>
            <button className="connexion__btn" type="submit">Connexion</button>
          </form>

          <form className={inscriptionSelect ? 'connexion__container_body-form active' : 'connexion__container_body-form'} onSubmit={handleSubmitRegister}>
            <div className="connexion__container_body-row">
              <i className="bi bi-envelope" />
              <input
                type="email"
                className="input"
                placeholder="Adresse Mail"
                value={newRegisterEmail}
                onChange={(evt) => setNewRegisterEmail(evt.target.value)}
              />
            </div>
            <div className="connexion__container_body-row">
              <i className="bi bi-person-square" />
              <input
                type="text"
                className="input"
                placeholder="Pseudo"
                value={newRegisterPseudo}
                onChange={(evt) => setNewRegisterPseudo(evt.target.value)}
              />
            </div>
            <div className="connexion__container_body-row">
              <i className="bi bi-lock" />
              <input
                type="password"
                className="input"
                placeholder="Mot de passe"
                value={newRegisterPassword}
                onChange={(evt) => setNewRegisterPassword(evt.target.value)}
              />
            </div>
            <button className="connexion__btn" type="submit">Inscription</button>
          </form>
        </div>

      </div>
    </div>
  );
};

Connexion.propTypes = {
  handleSelectConnexion: PropTypes.func.isRequired,
  handleSelectInscription: PropTypes.func.isRequired,
  connexionSelect: PropTypes.bool.isRequired,
  inscriptionSelect: PropTypes.bool.isRequired,
  manageSubmitConnexion: PropTypes.func.isRequired,
  manageSubmitRegister: PropTypes.func.isRequired,
  newConnexionEmail: PropTypes.string.isRequired,
  setNewConnexionEmail: PropTypes.func.isRequired,
  newConnexionPassword: PropTypes.string.isRequired,
  setNewConnexionPassword: PropTypes.func.isRequired,
  newRegisterEmail: PropTypes.string.isRequired,
  setNewRegisterEmail: PropTypes.func.isRequired,
  newRegisterPseudo: PropTypes.string.isRequired,
  setNewRegisterPseudo: PropTypes.func.isRequired,
  newRegisterPassword: PropTypes.string.isRequired,
  setNewRegisterPassword: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Connexion;
