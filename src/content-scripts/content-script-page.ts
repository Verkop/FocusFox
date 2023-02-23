import { switchMap, take } from 'rxjs'
import Browser from 'src/browser/browser'
import Document from 'src/document/document'

export default abstract class ContentScriptPage {
  public static directory = 'content-scripts/'
  public static javaScriptDirectory = `${ContentScriptPage.directory}js/`
  public static stylesDirectory = `${ContentScriptPage.directory}css/`
  public static htmlDirectory = `${ContentScriptPage.directory}html/`

  constructor(readonly id: string) {}

  public show(): void {
    // The document body must be hidden before the page is loaded, otherwise the original page is visible for a moment before it is replaced by the block page
    Document.hideBody()

    Document.setFont('Quicksand', 'assets/fonts/Quicksand-Regular.ttf')
    Browser.getFileContent(`${ContentScriptPage.stylesDirectory}${this.id}.css`)
      .pipe(take(1))
      .subscribe((style) => {
        console.log(style)
        Document.addStyle(style)
      })

    // The body must be replaced after the original document has been loaded otherwise the original page overwrites the block page as soon as it is loaded
    Document.contentLoaded
      .pipe(
        take(1),
        switchMap(() => Browser.getFileContent(`${ContentScriptPage.htmlDirectory}${this.id}.html`))
      )
      .subscribe((pageContent) => {
        Document.replaceBody(pageContent)
        Document.showBody()
      })
  }
}
