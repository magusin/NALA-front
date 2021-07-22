import React from 'react';
import PropTypes from 'prop-types';
import './connexion.scss';

const Connexion = ({
  handleSelectConnexion,
  handleSelectInscription,
  connexionSelect,
  inscriptionSelect,
}) => {
  
  return (
    <div className="general">
      <h1 className={inscriptionSelect ? 'connexion active' : 'connexion'}> Inscription </h1>
      <h1 className={connexionSelect ? 'connexion active' : 'connexion'}> Connection </h1>
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

          <form className={connexionSelect ? 'form active' : 'form'} action="">
            <div className="row">
            <i className="far fa-envelope"></i>
              <input type="email" className="input" placeholder="Adresse Mail"/>
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input placeholder="Mot de Passe" type="password" className="input"></input>
            </div>
            <a href="#" className="link">Mot de passe oublié ?</a>
            <button className="btn" type="button">Connexion</button>
          </form>
          
          <form className={inscriptionSelect ? 'form active' : 'form'} action="">
            <div className="row">
              <i className="far fa-envelope"></i>
              <input type="email" className="input" placeholder="Adresse Mail"/>
            </div>
            <div className="row">
              <i className="far fa-user"></i>
              <input type="text" className="input" placeholder="Pseudo"/>
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" className="input" placeholder="Mot de passe"/>
            </div>
            <div className="row">
              <div>captcha à faire une fois le domaine fait</div>
            </div>
            <button className="btn" type="button">Inscription</button>
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
}

export default Connexion;


