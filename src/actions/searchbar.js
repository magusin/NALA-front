/* eslint-disable no-shadow */
export const NEW_SEARCH = 'NEW SEARCH';
export const newSearch = () => ({
  type: NEW_SEARCH,
});
export const SET_NEW_SEARCH = 'SET_NEW_SEARCH';
export const setNewSearch = (newSearch) => ({
  type: SET_NEW_SEARCH,
  newSearch,
});
