import { connect } from 'react-redux';

import Picture from 'src/components/Picture';
import { fetchCommentsWithIdFromApi, fetchPostWithIdFromApi } from '../../actions/api';
import { changeDisplayComments } from '../../actions/picture';

const mapStateToProps = (state, ownProps) => ({
  isReady: state.picture.isReady,
  picture: state.picture.picture,
  displayComments: state.picture.displayComments,
  isLogged: state.user.isLogged,
  comments: state.comment.comments,
  commentIsReady: state.comment.commentIsReady,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPostWithId: () => {
    dispatch(fetchPostWithIdFromApi(ownProps.match.params.id))
  },
  fetchCommentsFromApi: () => {
    dispatch(fetchCommentsWithIdFromApi(ownProps.match.params.id))
  },
  changeDisplay: () => {
    dispatch(changeDisplayComments())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Picture);
