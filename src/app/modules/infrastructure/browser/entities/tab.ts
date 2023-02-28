export default class Tab {
  public readonly url: URL | null

  constructor(readonly id: number, url: string | null) {
    this.url = url == null ? null : new URL(url)
  }
}
