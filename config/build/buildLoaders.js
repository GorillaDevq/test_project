import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function buildLoaders() {
    const babelLoader = {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
    }

    const cssLoader = {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                }
            },
            'postcss-loader'
        ]
    }

    const imageLoader = {
        test: /\.(png|svg|jpg|gif|)$/,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name].[hash][ext]'
        }
    }

    const fontLoader = {
        test: /\.(woff|woff2|ttf|otf|)$/,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name].[hash][ext]'
        }
    }

    return [
        babelLoader,
        cssLoader,
        imageLoader,
        fontLoader,
    ]
}