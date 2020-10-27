import { createSelector } from 'reselect';

const selectWookie = state => state.wookie;

export const selectLangage = createSelector(
  [selectWookie],
  (wookie) => wookie.langage
);