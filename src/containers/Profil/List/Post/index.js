import { connect } from 'react-redux';

import Post from 'src/components/Profil/List/Post';
import { editPostFromApi, fetchDeletePost } from '../../../../actions/api';
import { changeCategory, changeTitle } from '../../../../actions/post';

const mapStateToProps = (state, ownProps) => ({
  categories: ownProps.categories,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deletePost: function (postId){
    dispatch(fetchDeletePost(postId));
  },
  editPost: function (postId){
    dispatch(editPostFromApi(postId));
  },
  handleChangeCategory: function (categoryId) {
    dispatch(changeCategory(categoryId));
  },
  handleChangeTitle: function (title) {
    dispatch(changeTitle(title));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
