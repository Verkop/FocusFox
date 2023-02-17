import { switchMap } from 'rxjs/internal/operators/switchMap'
import { take } from 'rxjs/internal/operators/take'
import Browser from 'src/browser/browser'
import Document from 'src/document/document'

// The document body must be hidden before the page is loaded, otherwise the original page is visible for a moment before it is replaced by the block page
Document.hideBody()

// The body must be replaced after the original document has been loaded otherwise the original page overwrites the block page as soon as it is loaded
Document.contentLoaded
  .pipe(
    take(1),
    switchMap(() => Browser.getFileContent('block-page/block-page.html'))
  )
  .subscribe((pageContent) => {
    Document.replaceBody(pageContent)
    Document.showBody()
  })
