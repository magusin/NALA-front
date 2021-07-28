import { connect } from 'react-redux';
import { 
    selectConnexionForm, 
    selectInscriptionForm,
    newConnexionEmail,
    setNewConnexionEmail,
    newConnexionPassword,
    setNewConnexionPassword,
    newSubscriptionEmail,
    setNewSubscriptionEmail,
    newSubscriptionPseudo,
    setNewSubscriptionPseudo,
    newSubscriptionPassword,
    setNewSubscriptionPassword,
} from 'src/actions/connexionForm';

import Connexion from 'src/components/Connexion';

const mapStateToProps = (state, ownProps) => ({
  connexionSelect: state.connexionForm.connexionSelect,
  inscriptionSelect: state.connexionForm.inscriptionSelect,
  newConnexionEmail: state.connexionForm.newConnexionEmail,
  newConnexionPassword: state.connexionForm.newConnexionPassword,
  newSubscriptionEmail: state.connexionForm.newSubscriptionEmail,
  newSubscriptionPseudo: state.connexionForm.newSubscriptionPseudo,
  newSubscriptionPassword: state.connexionForm.newSubscriptionPassword,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSelectConnexion: function(){
      dispatch(selectConnexionForm())
  },
  handleSelectInscription: function(){
      dispatch(selectInscriptionForm())
  },

  setNewConnexionEmail: (newConnexionEmail) => {
    dispatch(setNewConnexionEmail(newConnexionEmail))
  },

  setNewConnexionPassword: (newConnexionPassword) => {
    dispatch(setNewConnexionPassword(newConnexionPassword))
  },

  setNewSubscriptionEmail: (newSubscriptionEmail) => {
    dispatch(setNewSubscriptionEmail(newSubscriptionEmail))
  },
  
  setNewSubscriptionPseudo: (newSubscriptionPseudo) => {
    dispatch(setNewSubscriptionPseudo(newSubscriptionPseudo))
  },

  setNewSubscriptionPassword: (newSubscriptionPassword) => {
    dispatch(setNewSubscriptionPassword(newSubscriptionPassword))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);