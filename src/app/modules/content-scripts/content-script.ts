export default abstract class ContentScript {
  public static directory = 'content-scripts/'
  public static scriptsDirectory = `${ContentScript.directory}js/`
  public static stylesDirectory = `${ContentScript.directory}css/`
  public static htmlDirectory = `${ContentScript.directory}html/`

  constructor(public readonly id: string) {}

  public get scriptUrls(): string[] {
    return [`${ContentScript.scriptsDirectory}${this.id}.js`]
  }

  abstract execute(): void
}
