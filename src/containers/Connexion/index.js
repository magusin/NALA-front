/* eslint-disable no-shadow */
import { connect } from 'react-redux';
import {
  selectConnexionForm,
  selectInscriptionForm,
  newConnexionEmail,
  setNewConnexionEmail,
  newConnexionPassword,
  setNewConnexionPassword,
  newRegisterEmail,
  setNewRegisterEmail,
  newRegisterPseudo,
  setNewRegisterPseudo,
  newRegisterPassword,
  setNewRegisterPassword,
} from 'src/actions/connexionForm';

import { connectUser, registerUser } from 'src/actions/api';
import Connexion from 'src/components/Connexion';

const mapStateToProps = (state, ownProps) => ({
  connexionSelect: state.connexionForm.connexionSelect,
  inscriptionSelect: state.connexionForm.inscriptionSelect,
  newConnexionEmail: state.connexionForm.newConnexionEmail,
  newConnexionPassword: state.connexionForm.newConnexionPassword,
  newRegisterEmail: state.connexionForm.newRegisterEmail,
  newRegisterPseudo: state.connexionForm.newRegisterPseudo,
  newRegisterPassword: state.connexionForm.newRegisterPassword,
  isLogged: state.user.logged,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSelectConnexion: function () {
    dispatch(selectConnexionForm());
  },
  handleSelectInscription: function () {
    dispatch(selectInscriptionForm());
  },

  setNewConnexionEmail: (newConnexionEmail) => {
    dispatch(setNewConnexionEmail(newConnexionEmail));
  },

  setNewConnexionPassword: (newConnexionPassword) => {
    dispatch(setNewConnexionPassword(newConnexionPassword));
  },

  setNewRegisterEmail: (newRegisterEmail) => {
    dispatch(setNewRegisterEmail(newRegisterEmail));
  },

  setNewRegisterPseudo: (newRegisterPseudo) => {
    dispatch(setNewRegisterPseudo(newRegisterPseudo));
  },

  setNewRegisterPassword: (newRegisterPassword) => {
    dispatch(setNewRegisterPassword(newRegisterPassword));
  },

  manageSubmitConnexion: () => {
    dispatch(connectUser());
  },

  manageSubmitRegister: () => {
    dispatch(registerUser());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);
