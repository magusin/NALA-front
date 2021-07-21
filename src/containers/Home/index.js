import { connect } from 'react-redux';

import Home from 'src/components/Home';

const mapStateToProps = (state, ownProps) => ({
  carousel : state.carousel.carousel,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
