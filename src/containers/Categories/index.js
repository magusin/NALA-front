import { connect } from 'react-redux';

import Categories from 'src/components/Categories';
import { fetchCategoriesFromApi } from '../../actions/api';

const mapStateToProps = (state, ownProps) => ({
  categories: state.categories.categories,
  categoriesLoaded: state.categories.categoriesLoaded,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCategories: function () {
    dispatch(fetchCategoriesFromApi());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
