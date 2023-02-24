import ContentScriptPage from 'src/app/modules/content-scripts/content-script-page'

export default class BlockPage extends ContentScriptPage {
  public static id = 'block-page'

  constructor() {
    super(BlockPage.id)
  }

  protected override get resources(): Record<string, string> {
    return { mainImage: 'assets/images/focus-fox-round.png' }
  }
}
