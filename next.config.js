/** @type {import('next').NextConfig} */
module.exports = {
    // Use the prefix for asset path
    assetPrefix: process.env.NODE_ENV === 'production' ? '/next.js_Membership_Validation' : '',
    // output: 'export',
    // rules: {
    //     // 기존 규칙...
    //
    //     // Prettier 규칙을 비활성화
    //     'prettier/prettier': 'off',
    // },

    experimental: {
        appDir: true,
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(wav)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: `/_next/static/sounds/`,
                    outputPath: `${options.isServer ? "../" : ""}static/sounds/`,
                },
            },
        });

        return config;
    },
}
