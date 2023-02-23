import ContentScriptPage from 'src/content-scripts/content-script-page'

export default class BlockPage extends ContentScriptPage {
  public static id = 'block-page'

  constructor() {
    super(BlockPage.id)
  }
}

new BlockPage().show()
