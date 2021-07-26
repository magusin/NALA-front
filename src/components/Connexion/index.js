import React, { useEffect } from 'react';
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
  manageSubmit,

}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('je veux me connecter');

    manageSubmit();
  };

  return (
    <div className="general">
      <h1 className={inscriptionSelect ? 'connexion active' : 'connexion'}> Inscription </h1>
      <h1 className={connexionSelect ? 'connexion active' : 'connexion'}> Connexion </h1>
      <div className="container">
        <div className="tab-top" >
          <button className="tab-link active" 
                  data-ref="connexion" 
                  href="#" 
                  onClick={() => (handleSelectConnexion())}>Connexion</button>
          <button className="tab-link" 
                  data-ref="inscription" 
                  href="#" 
                  onClick={() => (handleSelectInscription())}>Inscription</button>
        </div>

        <div className="tab-body">

          <form 
            className={connexionSelect ? 'form active' : 'form'} 
            onSubmit={handleSubmit}
          >
            <div className="row">
            <i className="bi bi-envelope"></i>
              <input
                type="email"
                className="input"
                placeholder="Adresse Mail"
                value={newConnexionEmail}
                onChange={(evt) => setNewConnexionEmail(evt.target.value)}
                required
              />
            </div>
            <div className="row">
              <i className="bi bi-lock"></i>
                <input
                  placeholder="Mot de Passe"
                  type="password"
                  className="input"
                  value={newConnexionPassword}
                  onChange={(evt) => setNewConnexionPassword(evt.target.value)}
                  required
                />
            </div>
            <a href="#" className="link">Mot de passe oublié ?</a>
            <button
              className="btn"
              type="submit"
            >
              Connexion
            </button>
          </form>
          
          <form className={inscriptionSelect ? 'form active' : 'form'}
          onSubmit={handleSubmit}
          >
            <div className="row">
              <i className="bi bi-envelope"></i>
              <input
                type="email"
                className="input"
                placeholder="Adresse Mail"
                value={newRegisterEmail}
                onChange={(evt) => setNewRegisterEmail(evt.target.value)}
                required
              />
            </div>
            <div className="row">
              <i className="bi bi-person-square"></i>
              <input 
                type="text"
                className="input"
                placeholder="Pseudo"
                value={newRegisterPseudo}
                onChange={(evt) => setNewRegisterPseudo(evt.target.value)}
                required
              />
            </div>
            <div className="row">
              <i className="bi bi-lock"></i>
              <input
                type="password"
                className="input" 
                placeholder="Mot de passe"
                value={newRegisterPassword}
                onChange={(evt) => setNewRegisterPassword(evt.target.value)}
                required
              />
            </div>
            <div className="row">
              <div>captcha à faire une fois le domaine fait</div>
            </div>
            <button
              className="btn"
              type="submit"
            >
              Inscription
            </button>
          </form>
        </div>

        </div>
        </div>
  
  );
  
}

Connexion.propTypes = {
  handleSelectConnexion: PropTypes.func.isRequired,
  handleSelectInscription: PropTypes.func.isRequired,
  connexionSelect: PropTypes.bool.isRequired,
  inscriptionSelect: PropTypes.bool.isRequired,
  manageSubmit: PropTypes.func.isRequired,
}

export default Connexion;


