import { connect } from 'react-redux';

import Home from 'src/components/Home';
import { fetchTopLoveFromApi } from 'src/actions/api';


const mapStateToProps = (state, ownProps) => ({
  carousel : state.carousel.carousel,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTopLove: () => {
    dispatch(fetchTopLoveFromApi());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
