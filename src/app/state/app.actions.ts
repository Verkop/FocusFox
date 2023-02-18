import { createAction } from '@ngrx/store';

export default class AppActions {
  private static readonly group = '[App]';

  public static readonly appInitializing = createAction(`${AppActions.group} Initializing`);
}
