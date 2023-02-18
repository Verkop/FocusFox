import Browser from 'src/browser/browser'

Browser.navigationCompleted.subscribe(() => console.log('navigation completed'))
