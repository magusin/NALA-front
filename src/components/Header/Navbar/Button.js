import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const Button = ({
  isLogged,
  changeConnexionFormToConnexion,
  changeConnexionFormToRegister,
}) => {
  return (
    <>
      {isLogged &&
        <Link to='/connexion'>
          <button className='button-button'>Déconnexion</button>
        </Link>
      }

      {!isLogged &&
        <>
          <Link to='/connexion'>
            <button className='button-button' onClick={() => changeConnexionFormToConnexion()}>Connexion</button>
          </Link>
          <Link to='/connexion' onClick={() => changeConnexionFormToRegister()}>
            <button className='button-button'>Inscription</button>
          </Link>
        </>
      }
    </>
  );
}

export default Button;
