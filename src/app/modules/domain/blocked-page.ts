export class BlockedPage {
  constructor(public readonly url: URL) {}

  public matches(url: URL): boolean {
    return url.host == this.url.host
  }

  public static create(url: URL): BlockedPage {
    return new BlockedPage(url)
  }
}
