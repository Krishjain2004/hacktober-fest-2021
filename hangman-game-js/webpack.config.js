const path = require('path');

module.exports = {
    // babel-polyfill is used to fix regeneratorRuntime error.
    // babel-polyfill is used for running functions like async await in older browsers.
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname + '/public/scripts/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}