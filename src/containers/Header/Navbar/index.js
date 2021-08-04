import { connect } from 'react-redux';

import Navbar from 'src/components/Header/Navbar';
import { changeConnexionFormForConnexion, changeConnexionFormForRegister, logoutUser } from '../../../actions/connexionForm';

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.user.logged,
  nickname: state.user.nickname,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeConnexionFormToRegister: () => {
    dispatch(changeConnexionFormForRegister());
  },
  changeConnexionFormToConnexion: () => {
    dispatch(changeConnexionFormForConnexion());
  },

  logoutUser: () => {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
