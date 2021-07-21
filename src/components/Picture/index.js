import React from 'react';

import './picture.scss';

const Picture = () => (
  <div className="picture">
    <div className="picture-top">
      <div className="picture-title"></div>
      <button>x</button>
    </div>
    <div className="picture-img"></div>
    <div className="picture-bottom">
      <div className="picture-comment"></div>
      <button><i className="bi bi-heart-fill"></i></button>
      <button><i className="bi bi-chat-left-text-fill"></i></button>
    </div>

  </div>
);

export default Picture;
