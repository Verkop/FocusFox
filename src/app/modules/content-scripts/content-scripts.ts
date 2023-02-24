import BlockPage from 'src/app/modules/content-scripts/block-page/block-page'

export default class ContentScripts {
  public static get blockPage(): BlockPage {
    return new BlockPage()
  }
}
