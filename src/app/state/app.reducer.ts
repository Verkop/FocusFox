import { createReducer, on, Action } from '@ngrx/store';
import AppActions from 'src/app/state/app.actions';
import { AppState, initialState } from 'src/app/state/app.state';

export class AppReducer {
  public static readonly featureName = 'app';

  private static readonly reduceInternal = createReducer(
    initialState,

    on(AppActions.appInitializing, state => ({
      ...state,
      initializing: true,
    })),
  );

  public static reduce(state: AppState | undefined, action: Action): AppState {
    return AppReducer.reduceInternal(state, action);
  }
}
