/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
    experimental: {
        runtime: 'experimental-edge',
    },
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        config.plugins.push(new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }))
        return config;
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}
module.exports = nextConfig
