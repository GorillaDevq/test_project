const buildLoaders = require('./buildLoaders.js')
const buildPlugins = require('./buildPlugins.js')
const buildDevServer = require('./buildDevServer.js')
// import buildLoaders from "./buildLoaders.js";
// import buildPlugins from "./buildPlugins.js";
// import buildDevServer from "./buildDevServer.js";

function buildWebpackConfig(options) {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}

module.exports = buildWebpackConfig
