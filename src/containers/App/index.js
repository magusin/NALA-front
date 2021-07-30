import { connect } from 'react-redux';
import { saveToken } from 'src/actions/connexionForm';
import App from 'src/components/App';

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.user.logged,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitToken: function (token) {
    dispatch(saveToken(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
