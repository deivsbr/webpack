const path = require('path')
// adiciona plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry é o responsável por gerar arquivo que cria a build
    entry: './src/index.js' ,
    // saida 
    output: {
        filename: 'bundle.js',
        // caminho do arquivo
        path: path.resolve(__dirname, './dist')
    },
    // gera arquivos de desenvolvimento
    mode: 'development',
    devServer: {
        port: 9000,
        static: {
            directory:path.join(__dirname, './dist'),
        }, 
        hot: true,
        historyApiFallback: {index: 'index.html'}
    },
    module: {
        // regras referentes aos arquivos que iremos carregar
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            }
        ]
    }, 
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html'
        })
    ]
}