/* eslint-disable no-shadow */
import { connect } from 'react-redux';

import SearchBar from '../../components/Nav/SearchBar';
import { newSearch, setNewSearch } from '../../actions/searchbar';

const mapStateToprops = (state) => ({
  newSearch: state.searchbar.newSearch,
});

const mapDispatchToProps = (dispatch) => ({
  // manageSubmit: () => {
  //   dispatch(newSearch());
  // },

  setNewSearch: (newSearch) => {
    dispatch(setNewSearch(newSearch));
  },
});

export default connect(mapStateToprops, mapDispatchToProps)(SearchBar);
