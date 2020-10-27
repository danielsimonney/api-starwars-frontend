import {createSelector} from 'reselect'

const selectCategories = state => state.categories;

export const selectCategoriesSections = createSelector(
  [selectCategories],
  category => category.sections
);