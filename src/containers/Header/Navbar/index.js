import { connect } from 'react-redux';

import Navbar from 'src/components/Header/Navbar';

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
