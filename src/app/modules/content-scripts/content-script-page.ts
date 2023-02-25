import { take } from 'rxjs'
import ContentScript from 'src/app/modules/content-scripts/content-script'
import Browser from 'src/app/modules/infrastructure/browser/browser'
import Document from 'src/document/document'

export default abstract class ContentScriptPage extends ContentScript {
  constructor(id: string, browser: Browser, document: Document) {
    super(id, browser, document)
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
    this.document.hideBody()

    this.document.setFont('Quicksand', this.browser.getUrl('assets/fonts/Quicksand-Regular.ttf'))

    this.browser
      .getFileContent(`${ContentScriptPage.stylesDirectory}${this.id}.css`)
      .pipe(take(1))
      .subscribe((style) => this.document.addStyle(style))

    this.browser
      .getFileContent(`${ContentScriptPage.htmlDirectory}${this.id}.html`)
      .pipe(take(1))
      .subscribe((pageContent) => {
        this.document.replaceBody(pageContent)
        // Source attributes must be added programmatically to resolve the correct URL because paths in html are resolved
        // relative to the host pages URL
        Object.entries(this.resources).forEach((resource) =>
          this.document.addSourceAttribute(resource[0], this.browser.getUrl(resource[1]))
        )
        this.document.showBody()
      })
  }
}
