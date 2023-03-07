import { Injectable } from '@angular/core'
import { fromEventPattern, Observable, tap } from 'rxjs'

@Injectable()
export default class Document {
  public get contentLoaded(): Observable<void> {
    return Document.fromDocumentEvent('DOMContentLoaded')
  }

  public addFont(name: string, url: URL): void {
    this.addStyle(`@font-face { font-family: ${name}; src: url("${url.href}"); }`)
  }

  public hideBody(): void {
    this.addStyle('body {visibility: hidden !important;}')
  }

  public showBody(): void {
    this.addStyle('body {visibility: visible !important;}')
  }

  public replaceBody(body: string): void {
    document.body.outerHTML = body
  }

  public setFont(name: string, url: URL): void {
    this.addFont(name, url)
    this.addStyle(`body {font-family: ${name}  !important}`)
  }

  public addStyle(styleContent: string): void {
    const style = document.documentElement.appendChild(document.createElement('style'))
    style.textContent = styleContent
  }

  public addSourceAttribute(elementId: string, source: URL) {
    document.getElementById(elementId)?.setAttribute('src', source.href)
  }

  private static fromDocumentEvent(event: string): Observable<void> {
    return fromEventPattern<void>(
      (handler) => {
        document.addEventListener(event, handler)
      },
      (handler) => {
        document.removeEventListener(event, handler)
      }
    ).pipe(tap((args) => console.log(args)))
  }
}
