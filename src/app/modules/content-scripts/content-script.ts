import Browser from 'src/app/modules/infrastructure/browser/browser'
import Document from 'src/document/document'

export default abstract class ContentScript {
  public static directory = 'content-scripts/'
  public static scriptsDirectory = `${ContentScript.directory}js/`
  public static stylesDirectory = `${ContentScript.directory}css/`
  public static htmlDirectory = `${ContentScript.directory}html/`

  constructor(public readonly id: string, protected readonly browser: Browser, protected readonly document: Document) {}

  public get scriptUrls(): string[] {
    return [`${ContentScript.scriptsDirectory}${this.id}.js`]
  }

  abstract execute(): void
}
