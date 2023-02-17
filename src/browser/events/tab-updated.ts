import Tab from '../entities/tab'
import Event from './event'

export default class NavigationCompleted implements Event {
  constructor(readonly tab: Tab) {}
}
