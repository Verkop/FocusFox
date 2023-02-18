import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { Store } from '@ngrx/store';
import DashboardPageActions from 'src/app/modules/dashboard/containers/dashboard-page/state/dashboard-page.actions';

@Injectable()
export class DashboardPageEffects {
  appInitializing$ = createEffect(() => this.actions$.pipe(
    ofType(DashboardPageActions.initializing),
    tap(() => console.log('initializing'))))

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
  ) {
  }
}
