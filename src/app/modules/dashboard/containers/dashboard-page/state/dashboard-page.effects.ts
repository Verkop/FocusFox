import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { switchMap } from 'rxjs'
import { Store } from '@ngrx/store'
import DashboardPageActions from 'src/app/modules/dashboard/containers/dashboard-page/state/dashboard-page.actions'
import Browser from 'src/browser/browser'
import ContentScripts from 'src/app/modules/content-scripts/content-scripts'

@Injectable()
export class DashboardPageEffects {
  blockCurrentPageRequested$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(DashboardPageActions.blockCurrentPageRequested),
        switchMap(() => Browser.executeContentScript(ContentScripts.blockPage))
      ),
    { dispatch: false }
  )

  constructor(private readonly actions$: Actions, private readonly store: Store) {}
}
