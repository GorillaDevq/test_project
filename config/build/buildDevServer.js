const path = require('path');
function buildDevServer(options) {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
        watchFiles: ['src/**/*'],
    }
}

module.exports = buildDevServer
