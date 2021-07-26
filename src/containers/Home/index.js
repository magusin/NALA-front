import { connect } from 'react-redux';

import Home from 'src/components/Home';
import { fetchTopLoveFromApi, fetchLastPostFromApi } from '../../actions/api';


const mapStateToProps = (state, ownProps) => ({
  carousel : state.carousel.carousel,
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
