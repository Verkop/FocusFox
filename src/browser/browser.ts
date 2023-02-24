import { concatWith, filter, fromEventPattern, ignoreElements, map, mergeMap, Observable, switchMap, take, tap } from 'rxjs'
import { from } from 'rxjs'
import ContentScript from 'src/app/modules/content-scripts/content-script'
import Tab from 'src/browser/entities/tab'
import ActionClicked from 'src/browser/events/action-clicked'
import NavigationCompleted from 'src/browser/events/tab-updated'

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

  public static getFileContent(path: string): Observable<string> {
    return from(fetch(Browser.getUrl(path)).then((response) => response.text()))
  }

  public static getUrl(path: string): string {
    return chrome.runtime.getURL(path)
  }

  public static executeContentScript(contentScript: ContentScript): Observable<void> {
    return Browser.activeTabId.pipe(
      take(1),
      switchMap((tabId) => Browser.executeScript(tabId, contentScript.scriptUrls))
    )
  }

  public static executeScript(tabId: number, files: string[]): Observable<void> {
    return from(
      chrome.scripting.executeScript({
        target: {
          tabId: tabId,
        },
        files: files,
      })
    ).pipe(ignoreElements())
  }

  private static get activeTabId(): Observable<number> {
    return from(chrome.tabs.query({ active: true, currentWindow: true })).pipe(
      mergeMap((tabs) => tabs),
      filter((tab) => tab.id != undefined),
      map((tab) => tab.id!),
      take(1),
      concatWith(this.fromChromeEvent(chrome.tabs.onActivated).pipe(map(([tabActiveInfo]) => tabActiveInfo.tabId)))
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
      (...args) => args as T
    ).pipe(tap((args) => console.log(args)))
  }
}
