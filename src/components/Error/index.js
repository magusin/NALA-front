import React from 'react';

import Img404 from '../../assets/404.png'
import './error.scss';

const Error = () => (
  <div className="error">
    <div className="error__container">
        <h1 className="error__container-title">Oups</h1>
      <div className="error__container-bis">
        <p className="error__container-text">Il n'y a rien à voir ici !</p>
        <p className="error__container-text">Pour retourner à l'accueil</p>
        <a href="/" className="error__container-link"><p>C'est par là !</p></a>
      </div>
    </div>
    
    <div className="error__case">
      <img src={Img404} alt="404 error" className="error__case-img" />
    </div>
  </div>
);

export default Error;
