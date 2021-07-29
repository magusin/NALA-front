import React from 'react';

import './comment.scss';

const Comment = ({
  nickname,
  description,
  createdAt,
}) => {

  return(

          <div className="comment">
            <div className="comment__meta">Par
              <div className="comment__meta-author">{nickname}</div> le 
              <div className="comment__meta-date">{createdAt}</div>
            </div>
      
            <div className="comment-post">{description}</div>
          </div>
  )
};

export default Comment;
