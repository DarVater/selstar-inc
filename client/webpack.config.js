const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';


const sccLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'sass-loader'
    ]
    if (extra){
        loaders.push(extra)
    }
    return loaders
}

module.exports = {
    entry: { myAppName: path.resolve(__dirname, "./src/index.js") },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: production ? '[name].[contenthash].js' : '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: sccLoaders()
            },
            {
                test: /\.scss$/,
                use: sccLoaders('sass-loader')

            },
            // {
            //     test: /\.(png|jpg|svg|gif)$/,
            //     type: 'asset/resource',
            // },
            // You need this, if you are using `import file from "file.ext"`, for `new URL(...)` syntax you don't need it

            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: './',
                            useRelativePath: true,
                        }
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 80,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                        }
                    }
                ]
            },

        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack & React",
            template: "./src/index.html",
            favicon: "./public/favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: production ? '[name].[contenthash].css' : '[name].css',
        }),
    ],
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                router: () => 'http://localhost:5000',
                logLevel: 'debug' /*optional*/
            }
        }

    },
    mode: production ? 'production' : 'development',

};