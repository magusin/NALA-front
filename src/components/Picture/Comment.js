import React from 'react';

import './comment.scss';

const Comment = ({
  displayComments,
  user,
  description,
  createdAt,
}) => {

  return(
    <>
      {displayComments && 
        (
          <div className="comment">
            <div className="comment__meta">Par
              <div className="comment__meta-author">{comments.user.nickname}</div> le 
              <div className="comment__meta-date">{comments.createdAt}</div>
            </div>
      
            <div className="comment-post">{comments.description}</div>
          </div>
        )
      }

    </>
  )
};

export default Comment;
