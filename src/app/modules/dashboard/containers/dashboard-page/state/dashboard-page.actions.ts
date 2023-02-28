import { createAction, props } from '@ngrx/store'

export default class DashboardPageActions {
  private static readonly group = '[Dashboard Page]'

  public static readonly blockCurrentPageRequested = createAction(
    `${DashboardPageActions.group} Block current page requested`,
    props<{ blockAcrossInstallations: boolean }>()
  )
}
