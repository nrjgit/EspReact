var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
              //-------------------- Add SCSS Loaders -------------------------//
              {
                test: /\.scss$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('sass-loader')
                ]
            },
            //-------------------- Add CSS Loaders -------------------------//
            {
                test: /\.css$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader')
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            }
        ]
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
            //apiUrl: 'http://localhost:4000'
              apiUrl: 'http://127.0.0.1:8000'
            
        })
    }
}