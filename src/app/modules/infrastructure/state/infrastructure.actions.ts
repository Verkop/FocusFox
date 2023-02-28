import { createAction, props } from '@ngrx/store'
import Tab from 'src/app/modules/infrastructure/browser/entities/tab'

export default class InfrastructureActions {
  private static readonly group = '[Infrastructure]'

  public static readonly reloadTabRequested = createAction(`${InfrastructureActions.group} Reload tab requested`, props<{ tab: Tab }>())
}
