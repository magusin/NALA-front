import React from 'react';
import PropTypes from 'prop-types';

import './nav.scss';

const SearchBar = ({ newSearch, setNewSearch }) => (
  <>
    <form
      className="nav__form"
      onSubmit={(evt) => {
        evt.preventDefault();
        // manageSubmit();
      }}
    >
      <label htmlFor="site-search" className="nav__label">
        <input
          type="text"
          className="nav__search"
          placeholder="Rechercher"
          value={newSearch}
          onChange={(evt) => setNewSearch(evt.target.value)}
        />
        <button
          type="submit"
          className="nav__search-button"
        >
          <i className="bi bi-search" />
        </button>
      </label>
    </form>
  </>
);

SearchBar.propTypes = {
  // manageSubmit: PropTypes.func.isRequired,
  newSearch: PropTypes.string.isRequired,
  setNewSearch: PropTypes.func.isRequired,
};

export default SearchBar;
