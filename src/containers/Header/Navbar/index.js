import { connect } from 'react-redux';

import Navbar from 'src/components/Header/Navbar';
import { changeDarkMode } from '../../../actions';
import { changeConnexionFormForConnexion, changeConnexionFormForRegister, logoutUser } from '../../../actions/connexionForm';

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.user.logged,
  nickname: state.user.nickname,
  darkMode: state.user.darkMode,
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
  changeMode: () => {
    dispatch(changeDarkMode());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
