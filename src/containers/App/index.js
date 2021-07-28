import { connect } from 'react-redux';
import { saveToken } from 'src/actions/connexionForm';
import App from 'src/components/App';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitToken : function (token) {
    dispatch(saveToken(token));
  },
});

export default connect(null, mapDispatchToProps)(App);
