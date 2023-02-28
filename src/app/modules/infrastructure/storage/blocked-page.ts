import { BlockedPage as DomainBlockedPage } from 'src/app/modules/domain/blocked-page'

export interface BlockedPage {
  url: string
}

export function toDomainModel(blockedPage: BlockedPage): DomainBlockedPage {
  return new DomainBlockedPage(new URL(blockedPage.url))
}

export function fromDomainModel(blockedPage: DomainBlockedPage): BlockedPage {
  return { url: blockedPage.url.origin }
}
