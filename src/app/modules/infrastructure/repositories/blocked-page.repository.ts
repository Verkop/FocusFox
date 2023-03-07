import { Injectable } from '@angular/core'
import { map, Observable, switchMap, take } from 'rxjs'
import { BlockedPage } from 'src/app/modules/domain/blocked-page'
import { fromDomainModel, toDomainModel } from 'src/app/modules/infrastructure/storage/blocked-page'
import Storage from 'src/app/modules/infrastructure/storage/storage'
import distinctUntilSequenceKeyChanged from 'src/app/modules/shared/rxjs/distinct-until-sequence-key-changed'

@Injectable()
export default class BlockedPageRepository {

  constructor(private readonly storage: Storage) {}

  public get blockedPages(): Observable<BlockedPage[]> {
    return this.storage.state.pipe(
      map(([state, localState]) => state.blockedPages.concat(localState.blockedPages).map(toDomainModel)),
      distinctUntilSequenceKeyChanged('url')
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
}
