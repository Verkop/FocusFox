import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { AppReducer } from 'src/app/state/app.reducer';

export default class AppSelectors {
  private static readonly featureSelector = createFeatureSelector<AppState>(AppReducer.featureName);

  public static initializing = createSelector(
    AppSelectors.featureSelector,
    state => state.initializing);
}
