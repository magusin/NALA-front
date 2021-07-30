import { connect } from 'react-redux';

import Profil from 'src/components/Profil';

import {
  profilPseudo,
  newProfilPseudo,
  profilName,
  newProfilName,
  profilFirstname,
  newProfilFirstname,
} from '../../actions/profil';

const mapStateToProps = (state, ownProps) => ({
  profilPseudo: state.profil.profilPseudo,
  profilName: state.profil.profilName,
  profilFirstname: state.profil.profilFirstname,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  newProfilPseudo: (profilPseudo) => {
    dispatch(newProfilPseudo(profilPseudo))
  },

  newProfilName: (profilName) => {
    dispatch(newProfilName(profilName))
  },

  newProfilFirstname: (profilFirstname) => {
    dispatch(newProfilFirstname(profilFirstname))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
