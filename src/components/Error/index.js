import React from 'react';

import Img404 from '../../assets/404.png'
import './error.scss';

const Error = () => (
  <div className="error">
    <h1 className="error__title">Oups</h1>
    <div className="error__case">
      <img src={Img404} alt="404 error" className="error__case-img" />
    </div>
  </div>
);

export default Error;
