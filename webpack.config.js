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
        new webpack.SourceMapDevToolPlugin(),
    ],        
    devServer: {
        contentBase: './'
    }
};
