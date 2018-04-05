const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'build/[name].js',
        publicPath: './'
    },
    module: {   
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use:[
                    {
                        loader: 'file-loader?',
                        options: {
                            name:'[path][name].[ext]?[hash:10]',
                            emitFile: false
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
        new HtmlWebpackPlugin({
            template: './src/pug/index.pug',
            filename: 'index.html',
            inject:false
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/article.pug',
            filename: 'article.html',
            inject:false
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/publication.pug',
            filename: 'publication.html',
            inject:false
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/relation.pug',
            filename: 'relation.html',
            inject:false
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/gender-space.pug',
            filename: 'gender-space.html',
            inject:false
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/course.pug',
            filename: 'course.html',
            inject:false
        })

    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 5000,
        ignored: /node_modules/
    },
    devServer: {
        contentBase: path.join(__dirname,''),
        compress: true,
        port: 9000
    }
  };