import { createSelector } from 'reselect';

export const selectExternalAlternations = () => createSelector(
  (state) => state,
  (state) => state.get('externalAlternations')
);
