import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

export default{
    entry: './js/src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test:/\.(m?js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /.css$/,
                use:[
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { hmr: true }
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true,
            favicon: './favicon.ico',
            filename: './index.html',
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: './build/',
        hot: true
    }
}