/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

module.exports = {
    env: {
        NEXT_PUBLIC_FORM: 'myyojjde',
    },

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },

            use: ['@svgr/webpack'],
        });

        return config;
    },
};

module.exports = nextConfig;
