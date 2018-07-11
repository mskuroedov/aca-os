const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({path: '.env.test'});
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({path: '.env.development'});
}

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/,
                },
                {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: isProduction ?
            [
                CSSExtract,
                new webpack.DefinePlugin({ // <-- key to reducing React's size
                    'process.env.SECRET': JSON.stringify(process.env.SECRET),
                }),
                new UglifyJSPlugin(),
            ]
            :
            [
                CSSExtract,
                new webpack.DefinePlugin({ // <-- key to reducing React's size
                    'process.env.SECRET': JSON.stringify(process.env.SECRET),
                }),
            ],

        // new webpack.optimize.ModuleConcatenationPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     filename: 'vendor.[chunkhash].js',
        //     minChunks (module) {
        //         return module.context &&
        //             module.context.indexOf('node_modules') >= 0;
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         screw_ie8: true,
        //         conditionals: true,
        //         unused: true,
        //         comparisons: true,
        //         sequences: true,
        //         dead_code: true,
        //         evaluate: true,
        //         if_return: true,
        //         join_vars: true
        //     },
        //     output: {
        //         comments: false
        //     }
        // }),
        // new webpack.HashedModuleIdsPlugin()

        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer:
            {
                contentBase: path.join(__dirname, 'public'),
                historyApiFallback:
                    true,
                publicPath:
                    '/dist/'
            }
    }
        ;
};


// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const PreloadWebpackPlugin = require('preload-webpack-plugin');
// const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
// const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// const autoprefixer = require('autoprefixer');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
//
// const staticSourcePath = path.join(__dirname, '');
// const sourcePath = path.join(__dirname, 'src');
// const buildPath = path.join(__dirname, 'dist');
// const CSSExtract = new ExtractTextPlugin('styles.css');
//
// module.exports = (env) => {
//     const isProduction = env === 'production';
//     return {
//     entry: {
//         base: ['babel-polyfill', path.resolve(staticSourcePath, 'src/styles/styles.scss')],
//         app: ['babel-polyfill', path.resolve(sourcePath, 'app.js')]
//     },
//     output: {
//         path: path.join(__dirname, 'public/dist'),
//         filename: '[name].[chunkhash].js',
//         publicPath: '/'
//     },
//     resolve: {
//         extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
//         modules: [
//             sourcePath,
//             path.resolve(__dirname, 'node_modules')
//         ]
//     },
//     plugins: [
//         CSSExtract,
//         new webpack.DefinePlugin({
//             'process.env.NODE_ENV': JSON.stringify('production')
//         }),
//         new webpack.optimize.ModuleConcatenationPlugin(),
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'vendor',
//             filename: 'vendor.[chunkhash].js',
//             minChunks(module) {
//                 return module.context && module.context.indexOf('node_modules') >= 0;
//             }
//         }),
//         new UglifyJSPlugin(),
//         // new webpack.optimize.UglifyJsPlugin({
//         //     compress: {
//         //         warnings: false,
//         //         screw_ie8: true,
//         //         conditionals: true,
//         //         unused: true,
//         //         comparisons: true,
//         //         sequences: true,
//         //         dead_code: true,
//         //         evaluate: true,
//         //         if_return: true,
//         //         join_vars: true
//         //     },
//         //     output: {
//         //         comments: false
//         //     }
//         // }),
//         // new webpack.LoaderOptionsPlugin({
//         //     options: {
//         //         postcss: [
//         //             autoprefixer({
//         //                 browsers: [
//         //                     'last 3 version',
//         //                     'ie >= 10'
//         //                 ]
//         //             })
//         //         ],
//         //         context: staticSourcePath
//         //     }
//         // }),
//         new webpack.HashedModuleIdsPlugin(),
//         new HtmlWebpackPlugin({
//             template: path.join(__dirname, 'index.ejs'),
//             path: buildPath,
//             excludeChunks: ['base'],
//             filename: 'index.html',
//             minify: {
//                 collapseWhitespace: true,
//                 collapseInlineTagWhitespace: true,
//                 removeComments: true,
//                 removeRedundantAttributes: true
//             }
//         }),
//         new PreloadWebpackPlugin({
//             rel: 'preload',
//             as: 'script',
//             include: 'all',
//             fileBlacklist: [/\.(css|map)$/, /base?.+/]
//         }),
//         new ScriptExtHtmlWebpackPlugin({
//             defaultAttribute: 'defer'
//         }),
//         new ExtractTextPlugin({
//             filename: '[name].[contenthash].css',
//             allChunks: true
//         }),
//         new StyleExtHtmlWebpackPlugin({
//             minify: true
//         }),
//         new CompressionPlugin({
//             asset: '[path].gz[query]',
//             algorithm: 'gzip',
//             test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
//             threshold: 10240,
//             minRatio: 0.8
//         })
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: [
//                     'babel-loader'
//                 ],
//                 include: sourcePath
//             },
//             {
//                 test: /\.s?css$/,
//                 use: CSSExtract.extract({
//                     use: [
//                         {
//                             loader: 'css-loader',
//                             options: {
//                                 sourceMap: true
//                             }
//                         },
//                         {
//                             loader: 'sass-loader',
//                             options: {
//                                 sourceMap: true
//                             }
//                         }
//                     ]
//                 })
//             },
//             {
//                 test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
//                 use: 'file-loader?name=assets/[name]-[hash].[ext]'
//             },
//             {
//                 test: /\.(png|gif|jpg|svg)$/,
//                 use: [
//                     'url-loader?limit=20480&name=assets/[name]-[hash].[ext]'
//                 ],
//                 include: staticSourcePath
//             }
//         ]
//     },
//     devtool: isProduction ? 'source-map' : 'inline-source-map',
//     devServer: {
//         contentBase: path.join(__dirname, 'public', 'dist'),
//         historyApiFallback: true,
//         publicPath: '/dist/'
//     }
// }}