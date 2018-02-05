var webpack = require('webpack');

module.exports = {
    entry: [
        './index.js'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path: __dirname + '/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
    // TODO：想要启动调试，这句必不可少
        new webpack.SourceMapDevToolPlugin()
    ],
    devServer: {
        contentBase: './'
    }
};
