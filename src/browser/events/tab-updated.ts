import Tab from 'src/browser/entities/tab'
import Event from 'src/browser/events/event'

export default class NavigationCompleted implements Event {
  constructor(readonly tab: Tab) {}
}
