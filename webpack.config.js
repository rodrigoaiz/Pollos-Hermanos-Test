const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        }
                    },
                ]
            },
            {
                test: /\.(scss|css)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                dependency: { not: ['url'] },
                use: [
                {
                    loader: 'url-loader',
                    options: {
                    limit: 8192,
                    },
                },
                ],
            },
            /*
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: [
                {
                    loader: 'file-loader',
                    options: { name: 'assets/[hash].[ext]' }
                }],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                    limit: 8192,
                    },
                },
                ],
            },*/
            {
                test: /\.(woff|ttf)$/i,
                use: ["file-loader?name=fonts/[name].[ext]"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin(),

    ],
    optimization: {
        minimize: true,
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
    },
}