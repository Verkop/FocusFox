import { createReducer, Action } from '@ngrx/store'
import { DashboardPageState, initialState } from 'src/app/modules/dashboard/containers/dashboard-page/state/dashboard-page.state'

export class DashboardPageReducer {
  public static readonly featureName = 'dashboard page'

  private static readonly reduceInternal = createReducer(initialState)

  public static reduce(state: DashboardPageState | undefined, action: Action): DashboardPageState {
    return DashboardPageReducer.reduceInternal(state, action)
  }
}
