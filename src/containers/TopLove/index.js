import { connect } from 'react-redux';

import TopLove from 'src/components/TopLove';
import { fetchTopLoveFromApi } from '../../actions/api';

const mapStateToProps = (state, ownProps) => ({
  topLoveLoaded: state.categories.topLoveLoaded,
  topLove : state.categories.topLove,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTopLove: () => {
    dispatch(fetchTopLoveFromApi());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TopLove);
