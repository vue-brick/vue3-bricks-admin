// eslint-disable-next-line @typescript-eslint/no-var-requires
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const isLib = process.env.TYPE === 'lib'

module.exports = {
    chainWebpack(config) {
        if (!isLib) {
            config.plugin('monaco').use(new MonacoWebpackPlugin())
        }
        if (process.env.use_analyzer) {     // 分析
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        }
    },


}
