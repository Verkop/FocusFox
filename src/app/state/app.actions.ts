import { createAction, props } from '@ngrx/store'
import { BlockedPage } from 'src/app/modules/domain/blocked-page'

export default class AppActions {
  private static readonly group = '[App]'

  public static readonly initializing = createAction(`${AppActions.group} Initializing`)

  public static readonly blockedPagesChanged = createAction(
    `${AppActions.group} Blocked pages updated`,
    props<{ blockedPages: BlockedPage[] }>()
  )
}
