/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {

    reactStrictMode: true,
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        config.plugins.push(new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }))
        return config;
    },
    experimental: {
        images: {
            unoptimized: true
        }
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    exportPathMap: async function (
        defaultPathMap,
        {dev, dir, outDir, distDir, buildId},
    ) {
        return {
            '/': {page: '/'}
        };
    }

}
module.exports = nextConfig
