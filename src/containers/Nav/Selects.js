import { connect } from 'react-redux';

import Selects from 'src/components/Nav/Selects';
import { fetchCategoriesFromApi } from '../../actions/api';

const mapStateToProps = (state, ownProps) => ({
  categories : state.categories.categories,
  categoriesLoaded: state.categories.categoriesLoaded,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCategories: function () {
    dispatch(fetchCategoriesFromApi())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Selects);
