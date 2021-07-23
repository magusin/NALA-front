import { connect } from 'react-redux';

import Categories from 'src/components/Categories';
import { fetchCategoriesFromApi } from '../../actions/api';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCategories: () => {
    dispatch(fetchCategoriesFromApi())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
