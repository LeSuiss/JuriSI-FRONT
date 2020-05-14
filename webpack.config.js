const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const jsonImporter = require('node-sass-json-importer')

module.exports = {
    devServer: {

        compress: true,
        port: 9000
      },

   
    entry: [path.resolve(__dirname, 'src/index.js')],
    output: {
        path: path.resolve(__dirname, 'test'),
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [ {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader'},
           
            },
            { 
                test: /\.css?$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader"
                },
            ]},
              {
                // Match woff2 in addition to patterns like .woff?v=1.1.1.
                test: /\.(ttf|png|eot|svg|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                  loader: "url-loader",
                  options: {
                    // Limit at 50k. Above that it emits separate files
                    limit: 50000,
              
                    // url-loader sets mimetype if it's passed.
                    // Without this it derives it from the file extension
                    mimetype: "application/font-woff",
              
                    // Output below fonts directory
                    name: "./fonts/[name].[ext]",
                  }
                },
              },
        ]
     },
//    externals: {
//         //  exclude react
//          "react": "React",
//          "react-dom": "ReactDOM"
//      },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
        new ErrorOverlayPlugin()
      ],
      devtool: 'cheap-module-source-map', // 'eval' is not supported by error-overlay-webpack-plugin

};