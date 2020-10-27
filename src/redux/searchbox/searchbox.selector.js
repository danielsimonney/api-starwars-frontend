import {createSelector} from 'reselect';


export const selectSearchbox = state => state.searchBox;


export const selectAllSearchBox = createSelector(
  [selectSearchbox],
  searchBox => searchBox.all
);

export const selectSearchBoxType = (type) => createSelector(
    [selectAllSearchBox],
    (searchBoxType) => searchBoxType[type]
  )
