import { filter, fromEventPattern, map, Observable, tap } from 'rxjs'
import Tab from './entities/tab'
import ActionClicked from './events/action-clicked'
import NavigationCompleted from './events/tab-updated'

export default class Browser {
  public static get actionClicked(): Observable<ActionClicked> {
    return Browser.fromChromeEvent(chrome.action.onClicked).pipe(
      filter(([tab]) => tab.id != undefined),
      map(([tab]) => new ActionClicked(new Tab(tab.id as number, tab.url ?? null)))
    )
  }

  public static get navigationCompleted(): Observable<NavigationCompleted> {
    return Browser.fromChromeEvent(chrome.tabs.onUpdated).pipe(
      filter(([, tabChangeInfo]) => tabChangeInfo.status === 'complete'),
      map(([tabId, , tab]) => new NavigationCompleted(new Tab(tabId, tab.url ?? null)))
    )
  }

  static fromChromeEvent<T extends any[]>(event: chrome.events.Event<(...args: T) => void>): Observable<T> {
    return fromEventPattern<T>(
      (handler) => {
        event.addListener(handler)
      },
      (handler) => {
        event.removeListener(handler)
      },
      (...args) => args as T,
    )
    .pipe(tap(args => console.log(args)))
  }
}
