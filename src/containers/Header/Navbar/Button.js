import { connect } from 'react-redux';

import Button from 'src/components/Header/Navbar/Button';
import { changeConnexionFormForConnexion, changeConnexionFormForRegister, logoutUser } from '../../../actions/connexionForm';

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
  handleLogout: () => {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
