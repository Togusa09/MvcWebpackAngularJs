var path = require('path');

module.exports = {
    mode: 'development',
    entry: './scripts/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};