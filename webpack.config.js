const path = require('path');
// import path from "path";
// import { fileURLToPath } from 'url';
// import buildWebpackConfig from "./config/build/buildWebpackConfig.js";
const buildWebpackConfig = require('./config/build/buildWebpackConfig.js')

module.exports = (env) => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'pages', 'index.js'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'src', 'index.html'),
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    const config = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
}
