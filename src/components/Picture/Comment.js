import React from 'react';
import PropTypes from 'prop-types';

import './comment.scss';

const Comment = ({
  nickname,
  description,
  createdAt,
}) => (

  <div className="comment">
    <div className="comment__meta">Par
      <div className="comment__meta-author">{nickname}</div> le
      <div className="comment__meta-date">{createdAt}</div>
    </div>

    <div className="comment-post">{description}</div>
  </div>
);

Comment.propTypes = {
  nickname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Comment;
