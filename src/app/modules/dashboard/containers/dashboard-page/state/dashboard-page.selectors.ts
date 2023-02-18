import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardPageReducer } from 'src/app/modules/dashboard/containers/dashboard-page/state/dashboard-page.reducer';
import { DashboardPageState } from 'src/app/modules/dashboard/containers/dashboard-page/state/dashboard-page.state';

export default class DashboardPageSelectors {
  private static readonly featureSelector = createFeatureSelector<DashboardPageState>(DashboardPageReducer.featureName);

  public static initializing = createSelector(
    DashboardPageSelectors.featureSelector,
    state => state.initializing);
}
