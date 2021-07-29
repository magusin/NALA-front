import { connect } from 'react-redux';

import Home from 'src/components/Home';
import { fetchTopLoveFromApi, fetchLastPostFromApi } from '../../actions/api';

const mapStateToProps = (state, ownProps) => ({
  topLoveLoaded: state.categories.topLoveLoaded,
  lastPostsLoaded: state.categories.lastPostsLoaded,
  topLove: state.categories.topLove,
  lastPosts: state.categories.lastPosts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTopLove: () => {
    dispatch(fetchTopLoveFromApi());
  },
  fetchLastPosts: () => {
    dispatch(fetchLastPostFromApi());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
