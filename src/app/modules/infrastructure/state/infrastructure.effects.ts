import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { tap } from 'rxjs'
import Browser from 'src/app/modules/infrastructure/browser/browser'
import InfrastructureActions from 'src/app/modules/infrastructure/state/infrastructure.actions'

@Injectable()
export class InfrastructureEffects {
  reloadTabRequested$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(InfrastructureActions.reloadTabRequested),
        tap((action) => this.browser.reloadTab(action.tab))
      ),
    { dispatch: false }
  )

  constructor(private readonly actions$: Actions, private readonly store: Store, private readonly browser: Browser) {}
}
