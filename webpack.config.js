var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader'
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:8999/api/v1/',
            appAPI: 'http://localhost:8881/api/v2/',
            gCaptchaKey: '6LdU4PoUAAAAAG3ASQLRdWHv0hXTFBXn5Y9cWy3B',
        })
    }
}