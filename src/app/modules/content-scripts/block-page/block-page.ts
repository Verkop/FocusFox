import ContentScriptPage from 'src/app/modules/content-scripts/content-script-page'
import Browser from 'src/app/modules/infrastructure/browser/browser'
import Document from 'src/document/document'

export default class BlockPage extends ContentScriptPage {
  public static id = 'block-page'

  constructor(browser: Browser, document: Document) {
    super(BlockPage.id, browser, document)
  }

  protected override get resources(): Record<string, string> {
    return { mainImage: 'assets/images/focus-fox-round.png' }
  }
}
