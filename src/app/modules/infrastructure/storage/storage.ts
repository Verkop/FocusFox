import { Injectable } from '@angular/core'
import { combineLatestWith, concatWith, from, map, Observable, switchMap, take, withLatestFrom } from 'rxjs'
import fromChromeEvent from 'src/app/modules/infrastructure/browser/events/from-chrome-event'
import State, { initialState } from 'src/app/modules/infrastructure/storage/state'

@Injectable()
export default class Storage {
  public get state(): Observable<[State, State]> {
    return this.syncedState.pipe(combineLatestWith(this.localState))
  }

  public get syncedState(): Observable<State> {
    return this.currentSyncedState.pipe(
      concatWith(fromChromeEvent(chrome.storage.sync.onChanged).pipe(switchMap(() => this.currentSyncedState)))
    )
  }

  private get currentSyncedState(): Observable<State> {
    return from(chrome.storage.sync.get(null)).pipe(map((items) => items as State))
  }

  public get localState(): Observable<State> {
    return this.currentLocalState.pipe(
      concatWith(fromChromeEvent(chrome.storage.local.onChanged).pipe(switchMap(() => this.currentLocalState)))
    )
  }

  private get currentLocalState(): Observable<State> {
    return from(chrome.storage.local.get(null)).pipe(map((items) => items as State))
  }

  public initialize(): Observable<void> {
    return this.currentSyncedState.pipe(
      take(1),
      map((currentState) => {
        return {
          ...initialState,
          ...currentState,
        }
      }),
      switchMap((state) => this.update(state)),
      concatWith(
        this.currentLocalState.pipe(
          take(1),
          map((currentLocalState) => {
            return {
              ...initialState,
              ...currentLocalState,
            }
          }),
          switchMap((localState) => this.updateLocal(localState))
        )
      )
    )
  }

  public update<T extends Partial<State>>(value: T): Observable<void> {
    return from(chrome.storage.sync.set(value))
  }

  public updateLocal<T extends Partial<State>>(value: T): Observable<void> {
    return from(chrome.storage.local.set(value))
  }
}
