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
  } from '../../actions/contactform';

const mapStateToProps = (state, ownProps) => ({
  newFirstName: state.contactform.newFirstName,
  newEmail: state.contactform.newEmail,
  newSubject: state.contactform.newSubject,
  newMessage: state.contactform.newMessage,
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
