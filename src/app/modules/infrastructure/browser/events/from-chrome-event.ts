import { fromEventPattern, Observable, tap } from 'rxjs'

export default function fromChromeEvent<T extends any[]>(event: chrome.events.Event<(...args: T) => void>): Observable<T> {
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
