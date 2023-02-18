import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import AppActions from 'src/app/state/app.actions';
import { tap } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class AppEffects {
  appInitializing$ = createEffect(() => this.actions$.pipe(
    ofType(AppActions.appInitializing),
    tap(() => console.log('initializing'))))

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
  ) {
  }
}
