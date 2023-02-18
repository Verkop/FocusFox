import { createAction } from '@ngrx/store';

export default class DashboardPageActions {
  private static readonly group = '[Dashboard Page]';

  public static readonly initializing = createAction(`${DashboardPageActions.group} Initializing`);
}
