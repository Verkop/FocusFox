import { BlockedPage } from 'src/app/modules/infrastructure/storage/blocked-page'

export default interface State {
  blockedPages: BlockedPage[]
}

export const initialState: State = {
  blockedPages: [],
}
