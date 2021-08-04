import { connect } from 'react-redux';

import AddPost from 'src/components/Profil/AddPost';
import { fetchNewPostFromApi, uploadNewPicture } from '../../../actions/api';
import { addNewPicture, changeCategory, changeTitle } from '../../../actions/post';

const mapStateToProps = (state, ownProps) => ({
  categories: ownProps.categories,
  categoriesLoaded: ownProps.categoriesLoaded,
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
  handleChangeTitle: function (title) {
    dispatch(changeTitle(title));
  },
  fetchNewPost: function () {
    dispatch(fetchNewPostFromApi());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
