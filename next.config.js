const withCSS = require("@zeit/next-css");
const webpack = require("webpack");

require("dontenv").config();
const { SHOPIFY_API_KEY } = process.env;

module.exports = withCSS({
    webpack: (config) => {
        const API_KEY = JSON.stringify(SHOPIFY_API_KEY);
        const env = { API_KEY };
        config.plugins.push(new webpack.DefinePlugin(env));
        return config;
    },
});
