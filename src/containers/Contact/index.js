import { connect } from 'react-redux';

import Contact from 'src/components/Footer/Links/Contact';
import  {
  newFirstName,
  setNewFirstName,
  newEmail,
  setNewEmail,
  newSubject,
  setNewSubject,
  newMessage,
  setNewMessage,
  } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  newFirstName: state.newFirstName,
  newEmail: state.newEmail,
  newSubject: state.newSubject,
  newMessage: state.newMessage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setNewFirstName: (newFirstName) => {
    dispatch(setNewFirstName(newFirstName))
  },
  setNewEmail: (newEmail) => {
    dispatch(setNewEmail(newEmail))
  },
  setNewSubject: (newSubject) => {
    dispatch(setNewSubject(newSubject))
  },
  setNewMessage: (newMessage) => {
    dispatch(setNewMessage(newMessage))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
