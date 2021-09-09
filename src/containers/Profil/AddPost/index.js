import { connect } from 'react-redux';

import AddPost from 'src/components/Profil/AddPost';
import { fetchNewPostFromApi, uploadNewPicture } from '../../../actions/api';
import { addNewPicture, changeButtonUpload, changeCategory, changeTitle } from '../../../actions/post';

const mapStateToProps = (state, ownProps) => ({
  categories: ownProps.categories,
  categoriesLoaded: ownProps.categoriesLoaded,
  title: state.post.title,
  picture: state.post.addPicture,
  buttonDisabled: state.post.buttonDisabled,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeButtonDisabled: function(){
    dispatch(changeButtonUpload())
  },
  fileSelectedHandler: function (newFile){
    dispatch(addNewPicture(newFile))
  },
  fileUploadHandler: function (newFile){
    dispatch(uploadNewPicture(newFile))
  },
  handleChangeCategory: function (categoryId) {
    dispatch(changeCategory(categoryId));
  },
  handleChangeTitle: function (title) {
    dispatch(changeTitle(title));
  },
  fetchNewPost: function () {
    dispatch(fetchNewPostFromApi());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
