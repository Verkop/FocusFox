import Tab from '../entities/tab'
import Event from './event'

export default class ActionClicked implements Event {
  constructor(readonly tab: Tab) {}
}
