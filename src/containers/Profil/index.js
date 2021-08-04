import { connect } from 'react-redux';

import Profil from 'src/components/Profil';
import { fetchCategoriesFromApi } from '../../actions/api';

import {
  profilPseudo,
  newProfilPseudo,
  profilName,
  newProfilName,
  profilFirstname,
  newProfilFirstname,
  updateProfil,
  profilEmail,
  newProfilEmail,
  profilPassword,
  newProfilPassword,
} from '../../actions/profil';

const mapStateToProps = (state, ownProps) => ({
  email: state.user.email,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  nickname: state.user.nickname,
  password: state.user.password,
  profilPseudo: state.profil.profilPseudo,
  profilName: state.profil.profilName,
  profilFirstname: state.profil.profilFirstname,
  profilEmail: state.profil.email,
  profilPassword: state.profil.profilPassword,
  categories: state.categories.categories,
  categoriesLoaded: state.categories.categoriesLoaded,
  notification: state.profil.notification,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCategories: function () {
    dispatch(fetchCategoriesFromApi());
  },

  newProfilPseudo: (profilPseudo) => {
    dispatch(newProfilPseudo(profilPseudo));
  },

  newProfilName: (profilName) => {
    dispatch(newProfilName(profilName));
  },

  newProfilFirstname: (profilFirstname) => {
    dispatch(newProfilFirstname(profilFirstname));
  },

  newProfilEmail: (profilEmail) => {
    dispatch(newProfilEmail(profilEmail));
  },

  newProfilPassword: (profilPassword) => {
    dispatch(newProfilPassword(profilPassword));
  },

  manageSubmit: () => {
    dispatch(updateProfil());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
