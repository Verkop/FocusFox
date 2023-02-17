import { fromEventPattern, Observable } from 'rxjs'

export default class Document {
  public static get contentLoaded(): Observable<void> {
    return this.fromDocumentEvent('DOMContentLoaded')
  }

  public static hideBody(): void {
    const style = document.documentElement.appendChild(document.createElement('style'))
    style.textContent = 'body {visibility: hidden !important;}'
  }

  public static showBody(): void {
    const style = document.documentElement.appendChild(document.createElement('style'))
    style.textContent = 'body {visibility: visible !important;}'
  }

  public static replaceBody(body: string): void {
    document.body.outerHTML = body
  }

  static fromDocumentEvent(event: string): Observable<void> {
    return fromEventPattern<void>(
      (handler) => {
        document.addEventListener(event, handler)
      },
      (handler) => {
        document.removeEventListener(event, handler)
      }
    )
  }
}
