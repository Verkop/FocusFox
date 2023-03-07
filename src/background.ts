import { combineLatest, concatMap, filter, switchMap, tap, withLatestFrom } from 'rxjs'
import ContentScripts from 'src/app/modules/content-scripts/content-scripts'
import Browser from 'src/app/modules/infrastructure/browser/browser'
import BlockedPageRepository from 'src/app/modules/infrastructure/repositories/blocked-page.repository'
import Storage from 'src/app/modules/infrastructure/storage/storage'

const browser = new Browser()
const storage = new Storage()
const contentScripts = ContentScripts.create()
const blockedPageRepository = new BlockedPageRepository(storage)

browser.onInstall.pipe(concatMap(() => storage.initialize())).subscribe()

browser.tabLoading
  .pipe(
    withLatestFrom(blockedPageRepository.blockedPages),
    filter(([event, blockedPages]) => event.tab.url != null && blockedPages.some((blockedPage) => blockedPage.matches(event.tab.url!)))
  )
  .subscribe(([event]) => browser.executeContentScript(event.tab, contentScripts.blockPage))
