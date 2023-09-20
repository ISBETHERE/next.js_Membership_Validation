/** @type {import('next').NextConfig} */
const nextConfig = {
    // 자산 경로에 접두사 사용
    assetPrefix: process.env.NODE_ENV === 'production' ? '/next.js_Membership_Validation' : '',
};

module.exports = nextConfig;
