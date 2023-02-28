import { concatMap } from 'rxjs'
import Browser from 'src/app/modules/infrastructure/browser/browser'
import Storage from 'src/app/modules/infrastructure/storage/storage'

const browser = new Browser()
const storage = new Storage()

browser.onInstall.pipe(concatMap(() => storage.initialize())).subscribe()

browser.navigationCompleted.subscribe(() => console.log('navigation completed'))
