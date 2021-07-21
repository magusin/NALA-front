import { connect } from 'react-redux';
import { selectConnexionForm, selectInscriptionForm } from 'src/actions/connexionForm';

import Connexion from 'src/components/Connexion';

const mapStateToProps = (state, ownProps) => ({
   connexionSelect: state.connexionForm.connexionSelect,
   inscriptionSelect: state.connexionForm.inscriptionSelect,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
   handleSelectConnexion: function(){
       dispatch(selectConnexionForm())
   },
   handleSelectInscription: function(){
       dispatch(selectInscriptionForm())
   },
});

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);