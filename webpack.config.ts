import { glob } from 'glob'
import * as path from 'path'
import type { Configuration } from 'webpack'
import * as CopyPlugin from 'copy-webpack-plugin'

const contentScriptsSourcePath = 'src/content-scripts/'
const contentScriptPagesSourcePath = 'src/app/modules/content-scripts/'
const contentScriptsOutputPath = 'content-scripts/'

// Automatically register all content scrips as entries
var entryObjects = glob.sync(`${contentScriptsSourcePath}/*.ts`).reduce((entries, filePath) => {
  const entryName = path.parse(filePath).name

  entries[entryName] = {
    import: filePath,
    filename: `${contentScriptsOutputPath}js/${entryName}.js`,
    runtime: false,
  }

  return entries
}, {} as any)

var entryObjects = glob.sync(`${contentScriptPagesSourcePath}/*/*.scss`).reduce((entries, filePath) => {
  const entryName = path.parse(filePath).name

  entries[`${entryName}-style`] = filePath

  return entries
}, entryObjects)

export default (configuration: Configuration) => {
  configuration.entry = {
    ...(configuration.entry as object),
    background: 'src/background.ts',
    ...entryObjects,
  }

  // Existing rules (from angular) for processing scss files must exclude the content-scripts folder
  // because they must be build in a different way
  const rules = (configuration.module?.rules as any[]) || []
  rules
    .filter(rule => rule?.test instanceof RegExp && (rule.test as RegExp).test('.scss'))
    .forEach(rule => (rule.exclude = path.resolve(__dirname, contentScriptPagesSourcePath)))

  configuration.module?.rules?.push({
    test: /\.scss$/,
    include: path.resolve(__dirname, contentScriptPagesSourcePath),
    use: [
      {
        loader: 'file-loader',
        options: { outputPath: `${contentScriptsOutputPath}css`, name: '[name].css' },
      },
      'sass-loader',
    ],
  })

  configuration.plugins?.push(
    new CopyPlugin({
      patterns: [
        {
          from: `${contentScriptPagesSourcePath}/*/*.html`,
          to: `${contentScriptsOutputPath}html/[name][ext]`,
        },
      ],
    })
  )

  return configuration
}
