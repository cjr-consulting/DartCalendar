const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const bundleOutputDir = './wwwroot/dist';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    const extractLESS = new ExtractTextPlugin('site.css');

    return [{
        mode: isDevBuild ? 'development': 'production',
        stats: { modules: false },
        context: __dirname,
        resolve: {
            extensions: ['.vue', '.ts', '.js', '.scss'],
            modules: [path.resolve(__dirname), "node_modules"]
        },
        entry: {
            'main': ['whatwg-fetch', 'babel-polyfill', './ClientApp/app.ts'],
            'admin' : ['./ClientApp/admin.ts']},
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    enforce: 'pre',
                    use: [
                        {
                            loader: 'tslint-loader',
                            options: { /* Loader options go here */ }
                        }
                    ]
                },
                {
                    test: /\.vue$/,
                    include: /ClientApp/,
                    loader: 'vue-loader',
                    options: { loaders: { js: 'awesome-typescript-loader?silent=true' } }
                },
                {
                    test: /\.ts$/,
                    include: /ClientApp/,
                    use: 'awesome-typescript-loader?silent=true'
                },
                {
                    test: /\.css$/,
                    use: isDevBuild ? ['style-loader', 'css-loader'] : ExtractTextPlugin.extract({ use: 'css-loader?minimize' })
                },
                {
                    test: /\.less$/,
                    use: extractLESS.extract(['css-loader', 'less-loader'])
                },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' },
                {
                    test: /\.(scss)$/,
                    use: [
                      {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                      },
                      {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                      },
                      {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                      }
                    ]
                }
            ]
        },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: 'dist/'
        },
        plugins: [
            extractLESS,
            new VueLoaderPlugin(),
            new CheckerPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(isDevBuild ? 'development' : 'production')
                }
            }),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
                // Plugins that apply in production builds only
                new webpack.optimize.UglifyJsPlugin()
            ])
    }];
};
