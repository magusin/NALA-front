import { connect } from 'react-redux';

import AddPost from 'src/components/Profil/AddPost';
import { fetchCategoriesFromApi, fetchNewPostFromApi, uploadNewPicture } from '../../../actions/api';
import { addNewPicture, changeCategory, changeTitle } from '../../../actions/post';

const mapStateToProps = (state, ownProps) => ({
  categories: state.categories.categories,
  categoriesLoaded: state.categories.categoriesLoaded,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fileSelectedHandler: function (newFile){
    dispatch(addNewPicture(newFile))
  },
  fileUploadHandler: function (newFile){
    dispatch(uploadNewPicture(newFile))
  },
  handleChangeCategory: function (categoryId) {
    dispatch(changeCategory(categoryId));
  },
  handleChangeTitle: function (categoryId) {
    dispatch(changeTitle(categoryId));
  },
  fetchCategories: function () {
    dispatch(fetchCategoriesFromApi());
  },
  fetchNewPost: function () {
    dispatch(fetchNewPostFromApi());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
