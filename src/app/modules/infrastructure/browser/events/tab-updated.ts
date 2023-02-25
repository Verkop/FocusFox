import Tab from 'src/app/modules/infrastructure/browser/entities/tab'
import Event from 'src/app/modules/infrastructure/browser/events/event'

export default class NavigationCompleted implements Event {
  constructor(readonly tab: Tab) {}
}
