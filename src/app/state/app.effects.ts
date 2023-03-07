import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import AppActions from 'src/app/state/app.actions'
import { map, switchMap } from 'rxjs'
import BlockedPageRepository from 'src/app/modules/infrastructure/repositories/blocked-page.repository'

@Injectable()
export class AppEffects {
  appInitializing$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.initializing),
      switchMap(() => this.blockedPageRepository.blockedPages),
      map((blockedPages) => AppActions.blockedPagesChanged({ blockedPages }))
    )
  )

  constructor(private readonly actions$: Actions, private readonly blockedPageRepository: BlockedPageRepository) {}
}
