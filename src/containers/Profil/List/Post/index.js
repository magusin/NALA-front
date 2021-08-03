import { connect } from 'react-redux';

import Post from 'src/components/Profil/List/Post';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deletePost: function (postId){
    dispatch(fetchDeletePost(postId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
