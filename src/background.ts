import Browser from "./browser/browser";

Browser.navigationCompleted
.subscribe(() =>  console.log('navigation completed'))
