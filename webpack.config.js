var webpack = require('webpack');
var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        // 'webpack-dev-server/client?http://127.0.0.1:8080/',
        // 'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel?presets[]=react,presets[]=es2015']
        },
        {
            test: /\.less$/,
            loader: "style!css!less"
        },
        {
          test: /\.css$/,
          loader: 'style!css?sourceMap'
        }, {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file"
        }, {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=image/svg+xml"
      },
    //   {
    //         test: /\.(jpe?g|png|gif|svg)$/i,
    //         loaders: [
    //             'file?hash=sha512&digest=hex&name=[hash].[ext]',
    //             'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
    //             'url-loader?mimetype=images/png'
    //         ]
    //     },
        { test: /\.png$/, loader: "url-loader?mimetype=images/png" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
        // new ExtractTextPlugin('styles.css')
    ]
};
