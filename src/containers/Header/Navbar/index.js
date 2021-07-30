import { connect } from 'react-redux';

import Navbar from 'src/components/Header/Navbar';
import { changeConnexionFormForConnexion, changeConnexionFormForRegister } from '../../../actions/connexionForm';

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.user.logged,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeConnexionFormToRegister: () => {
    dispatch(changeConnexionFormForRegister());
  },
  changeConnexionFormToConnexion: () => {
    dispatch(changeConnexionFormForConnexion());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
