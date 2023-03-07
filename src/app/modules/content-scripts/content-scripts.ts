import { Injectable } from '@angular/core'
import BlockPage from 'src/app/modules/content-scripts/block-page/block-page'
import Browser from 'src/app/modules/infrastructure/browser/browser'
import Document from 'src/document/document'

@Injectable()
export default class ContentScripts {
  constructor(private readonly browser: Browser, private readonly document: Document) {}

  public get blockPage(): BlockPage {
    return new BlockPage(this.browser, this.document)
  }

  // This method creates all necessary dependencies and shall only be used in non-angular components.
  // To use this class in angular components use dependency injection.
  public static create(): ContentScripts {
    return new ContentScripts(new Browser(), new Document())
  }
}
