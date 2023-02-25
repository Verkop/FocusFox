import { take } from 'rxjs'
import ContentScript from 'src/app/modules/content-scripts/content-script'
import Browser from 'src/browser/browser'
import Document from 'src/document/document'

export default abstract class ContentScriptPage extends ContentScript {
  constructor(id: string) {
    super(id)
  }

  public get styleUrls(): string[] {
    return [`${ContentScriptPage.stylesDirectory}${this.id}.css`]
  }

  protected get resources(): Record<string, string> {
    return {}
  }

  public override execute(): void {
    this.show()
  }

  public show(): void {
    // The document body must be hidden before the page is loaded, otherwise the original page is visible for a moment before it is replaced by the block page
    Document.hideBody()

    Document.setFont('Quicksand', 'assets/fonts/Quicksand-Regular.ttf')

    Browser.getFileContent(`${ContentScriptPage.stylesDirectory}${this.id}.css`)
      .pipe(take(1))
      .subscribe((style) => Document.addStyle(style))

    Browser.getFileContent(`${ContentScriptPage.htmlDirectory}${this.id}.html`)
      .pipe(take(1))
      .subscribe((pageContent) => {
        Document.replaceBody(pageContent)
        // Source attributes must be added programmatically to resolve the correct URL because paths in html are resolved
        // relative to the host pages URL
        Object.entries(this.resources).forEach((resource) => Document.addSourceAttribute(resource[0], Browser.getUrl(resource[1])))
        Document.showBody()
      })
  }
}
