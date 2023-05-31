/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    env: {
        // defaults to TRUE, unless API Keys are set at build time; this flag is used by the UI
        REQUIRE_USER_API_KEYS: !process.env.OPENAI_API_KEY,
    },
    experimental: {
        runtime: 'edge',
    },
    webpack(config, {buildId, dev, isServer, defaultLoaders, webpack}) {
        // @mui/joy: anything material gets redirected to Joy
        config.resolve.alias['@mui/material'] = '@mui/joy';

        // @dqbd/tiktoken: enable asynchronous WebAssembly
        config.experiments = {
            asyncWebAssembly: true,
            layers: true,
        };

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
};

module.exports = nextConfig
