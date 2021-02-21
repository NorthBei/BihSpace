const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    // 沒用的js，只是為了讓webpack可以執行所設的
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        // default name: main.js -> main(deprecate).js 
        filename: 'js/[name](deprecate).js',
        publicPath: '/'
    },
    module: {   
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use:[
                    {
                        loader: 'file-loader?',
                        options: {
                            name:'[name].[hash:10].[ext]',
                            outputPath: 'images',
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: ['html-loader','pug-html-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/pug/index.pug',
            filename: 'index.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/article.pug',
            filename: 'article.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/publication.pug',
            filename: 'publication.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/relation.pug',
            filename: 'relation.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/gender-space.pug',
            filename: 'gender-space.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/course.pug',
            filename: 'course.html',
        }),
        // 因為webpack是v4，所以CopyPlugin最高只能用到v5.1.2的版本
        // Refer1: https://stackoverflow.com/questions/62519204/compilation-getlogger-is-not-a-function
        // Refer2: https://github.com/webpack-contrib/copy-webpack-plugin/tree/v5.1.2
        new CopyPlugin([
            { from: 'src/css', to: 'css' },
            { from: 'src/download', to: 'download' },
            { from: 'src/fonts', to: 'fonts' },
            { from: 'src/js', to: 'js' },
            // 因為banner的圖片都是用inline的寫法寫在html內，所以不會被webpack解析到，只好自己手動處理，複製一份到images的資料夾
            { from: 'src/images/banner-min.jpg', to: 'images' },
            { from: 'src/images/banner-article-min.jpg', to: 'images' },
            { from: 'src/images/banner-course-min.jpg', to: 'images' },
            { from: 'src/images/banner-gender-space-min.jpg', to: 'images' },
            { from: 'src/images/banner-publication-min.jpg', to: 'images' },
            { from: 'src/images/banner-relation-min.jpg', to: 'images' },
        ]),
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 5000,
        ignored: /node_modules/
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        port: 9000,
        hot: true
    }
  };