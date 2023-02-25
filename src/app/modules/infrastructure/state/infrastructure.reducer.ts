import { createReducer, Action } from '@ngrx/store';
import { InfrastructureState, initialState } from 'src/app/modules/infrastructure/state/infrastructure.state';

export class InfrastructureReducer {
  public static readonly featureName = 'infrastructure';

  private static readonly reduceInternal = createReducer(
    initialState,
  );

  public static reduce(state: InfrastructureState | undefined, action: Action): InfrastructureState {
    return InfrastructureReducer.reduceInternal(state, action);
  }
}
