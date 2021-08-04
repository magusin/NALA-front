import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({
  handleLogout,
  isLogged,
  changeConnexionFormToConnexion,
  changeConnexionFormToRegister,
}) => (
  <>
    {isLogged
        && (
        <Link to="/">
          <button
            type="button"
            className="button-button"
            onClick={handleLogout}
          >Déconnexion
          </button>
        </Link>
        )}

    {!isLogged
        && (
        <>
          <Link to="/connexion">
            <button
              type="button"
              className="button-button"
              onClick={() => changeConnexionFormToConnexion()}
            >
              Connexion
            </button>
          </Link>
          <Link
            to="/connexion"
            onClick={() => changeConnexionFormToRegister()}>
            <button
              type="button"
              className="button-button"
            >
              Inscription
            </button>
          </Link>
        </>
        )}
  </>
);

Button.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  changeConnexionFormToConnexion: PropTypes.func.isRequired,
  changeConnexionFormToRegister: PropTypes.func.isRequired,
};

export default Button;
