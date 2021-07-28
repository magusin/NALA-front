import { connect } from 'react-redux';

import Button from 'src/components/Header/Navbar/Button';
import { changeConnexionFormForConnexion, changeConnexionFormForRegister } from '../../../actions/connexionForm';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeConnexionFormToRegister: () => {
    dispatch(changeConnexionFormForRegister())
  },
  changeConnexionFormToConnexion: () => {
    dispatch(changeConnexionFormForConnexion())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
