import React from 'react';

import './picture.scss';

const Picture = () => (
  <div className="picture">

    <div className="picture-top">
      <div className="picture-top-title">Grum grum le cat</div>
      <button className="picture-top-close">X</button>
    </div>

    <div className="picture-img">
      <img src="https://www.ladn.eu/wp-content/uploads/2016/08/6356938644488566691013182599_grumpy-cat-1140x480.jpg?v=17" alt=""/>
    </div>

    <div className="picture-bottom">
      <div className="picture-comment"></div>
      <button><i className="bi bi-heart-fill"></i></button>
      <button><i className="bi bi-chat-left-text-fill"></i></button>
    </div>
    
  </div>
);

export default Picture;
