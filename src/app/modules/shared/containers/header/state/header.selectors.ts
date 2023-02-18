import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeaderReducer } from 'src/app/modules/shared/containers/header/state/header.reducer';

export default class HeaderSelectors {
  private static readonly featureSelector = createFeatureSelector<HeaderState>(HeaderReducer.featureName);

  public static initializing = createSelector(
    HeaderSelectors.featureSelector,
    state => state.initializing);
}
