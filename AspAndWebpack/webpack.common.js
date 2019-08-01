var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './scripts/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg)(\?.*)?$/,
                loader: 'file-loader?name=../dist/assets/[name].[ext]'
            },
          ]
    }
};