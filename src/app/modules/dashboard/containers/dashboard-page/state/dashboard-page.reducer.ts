import { createReducer, on, Action } from '@ngrx/store';
import DashboardPageActions from 'src/app/modules/dashboard/containers/dashboard-page/state/dashboard-page.actions';
import { DashboardPageState } from 'src/app/modules/dashboard/containers/dashboard-page/state/dashboard-page.state';
import { initialState } from 'src/app/state/app.state';

export class DashboardPageReducer {
  public static readonly featureName = 'dashboard page';

  private static readonly reduceInternal = createReducer(
    initialState,

    on(DashboardPageActions.blockCurrentPageRequested, state => ({
      ...state,
      initializing: true,
    })),
  );

  public static reduce(state: DashboardPageState | undefined, action: Action): DashboardPageState {
    return DashboardPageReducer.reduceInternal(state, action);
  }
}
