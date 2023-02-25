import { BlockedPage } from 'src/app/modules/domain/blocked-page'

export interface AppState {
  blockedPages: BlockedPage[]
}

export const initialState: AppState = {
  blockedPages: [],
}
