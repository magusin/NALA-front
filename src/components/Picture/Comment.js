import React from 'react';

import './comment.scss';

const Comment = ({
  description,
  createdAt,
}) => {

  return(

          <div className="comment">
            <div className="comment__meta">Par
              <div className="comment__meta-author">Hugo le Caliméro</div> le 
              <div className="comment__meta-date">{createdAt}</div>
            </div>
      
            <div className="comment-post">{description}</div>
          </div>
  )
};

export default Comment;
