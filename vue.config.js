const webpack = require("webpack");
const { argv } = require("yargs");

const firstParam = argv.myparam === 1 ? 'some param' : 'other param';

module.exports = {
    publicPath: '/app',
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin(
                {
                    MY_VARS: {
                        FIRST: JSON.stringify(firstParam),
                        SECOND: false
                    }
                }
            )
        ]
    }
}
