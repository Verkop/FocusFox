import { createReducer, Action } from '@ngrx/store';
import { HeaderState, initialState } from 'src/app/modules/shared/containers/header/state/header.state';

export class HeaderReducer {
  public static readonly featureName = 'header';

  private static readonly reduceInternal = createReducer(
    initialState,
  );

  public static reduce(state: HeaderState | undefined, action: Action): HeaderState {
    return HeaderReducer.reduceInternal(state, action);
  }
}
