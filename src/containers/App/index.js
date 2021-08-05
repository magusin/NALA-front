import { connect } from 'react-redux';
import { saveToken } from 'src/actions/connexionForm';
import App from 'src/components/App';

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.user.logged,
  darkMode: state.user.darkMode,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitToken: function (token, nickname, id, email, firstname, lastname, password, screenMode) {
    dispatch(saveToken(token, nickname, id, email, firstname, lastname, password, screenMode));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
