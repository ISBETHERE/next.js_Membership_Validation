/** @type {import('next').NextConfig} */
module.exports = {
    // Use the prefix for asset path
    assetPrefix: process.env.NODE_ENV === 'production' ? '/next.js_Membership_Validation' : '',
    output: 'export',
    rules: {
        // 기존 규칙...

        // Prettier 규칙을 비활성화
        'prettier/prettier': 'off',
    },
}
