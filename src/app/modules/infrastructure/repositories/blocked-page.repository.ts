import { Injectable, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, Observable, Subscription, switchMap, take, tap } from 'rxjs'
import { BlockedPage } from 'src/app/modules/domain/blocked-page'
import { fromDomainModel, toDomainModel } from 'src/app/modules/infrastructure/storage/blocked-page'
import Storage from 'src/app/modules/infrastructure/storage/storage'
import AppActions from 'src/app/state/app.actions'

@Injectable()
export default class BlockedPageRepository implements OnInit, OnDestroy {
  private storageSubscription!: Subscription

  constructor(private readonly store: Store, private readonly storage: Storage) {}

  public getBlockedPages(): Observable<BlockedPage[]> {
    return this.storage.state.pipe(
      take(1),
      map(([state, localState]) => state.blockedPages.concat(localState.blockedPages).map(toDomainModel))
    )
  }

  public addBlockedPage(blockedPage: BlockedPage, blockAcrossInstallations: boolean): Observable<void> {
    const state = blockAcrossInstallations ? this.storage.syncedState : this.storage.localState
    return state.pipe(
      take(1),
      map((state) => state.blockedPages),
      switchMap((blockedPages) => {
        blockedPages.push(fromDomainModel(blockedPage))
        return blockAcrossInstallations
          ? this.storage.update({ blockedPages: blockedPages })
          : this.storage.updateLocal({ blockedPages: blockedPages })
      })
    )
  }

  public ngOnInit(): void {
    this.storageSubscription = this.storage.state
      .pipe(
        map(([state, localState]) => state.blockedPages.concat(localState.blockedPages).map(toDomainModel)),
        tap((blockedPages) => this.store.dispatch(AppActions.blockedPagesChanged({ blockedPages })))
      )
      .subscribe()
  }

  public ngOnDestroy(): void {
    this.storageSubscription.unsubscribe()
  }
}
