import type { Configuration } from 'webpack'

module.exports = {
  entry: {
    background: { import: 'src/background.ts', runtime: false },
    blockPage: { import: 'src/block-page/block-page.ts', filename: "block-page/block-page.js", runtime: false },
  },
} as Configuration
