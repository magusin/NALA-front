import { connect } from 'react-redux';

import Picture from 'src/components/Picture';
import {
  addLike, fetchCommentsWithIdFromApi, fetchPostWithIdFromApi, removeLike, sendNewComment,
} from '../../actions/api';
import { writeNewComment } from '../../actions/comment';
import { changeDisplayComments, goInBackResetPicture } from '../../actions/picture';

const mapStateToProps = (state, ownProps) => ({
  userId: state.user.userId,
  isLogged: state.user.isLogged,

  isReady: state.picture.isReady,
  picture: state.picture.picture,
  pageId: ownProps.match.params.id,

  displayComments: state.picture.displayComments,
  comments: state.comment.comments,
  commentIsReady: state.comment.commentIsReady,
  newComment: state.comment.newComment,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPostWithId: () => {
    dispatch(fetchPostWithIdFromApi(ownProps.match.params.id));
  },
  fetchCommentsFromApi: () => {
    dispatch(fetchCommentsWithIdFromApi(ownProps.match.params.id));
  },
  changeDisplay: () => {
    dispatch(changeDisplayComments());
  },
  resetPicture: () => {
    dispatch(goInBackResetPicture());
  },
  manageSubmitComment: (post_id) => {
    console.log('container go');
    dispatch(sendNewComment(post_id));
  },
  changeNewComment: (text) => {
    dispatch(writeNewComment(text));
  },
  addUserLike: (post_id) => {
    dispatch(addLike(post_id));
  },
  removeUserLike: (post_id) => {
    dispatch(removeLike(post_id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Picture);
