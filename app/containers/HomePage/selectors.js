import { createSelector } from 'reselect';
import { selectExternalAlternations } from 'components/ExternalActionKernel/selectors';

export default () => createSelector(
  selectExternalAlternations(),
  (externalAlternations) => ({
    switchText: externalAlternations.get('switchText'),
  })
);
