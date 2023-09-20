/** @type {import('next').NextConfig} */
const nextConfig = {
    // Use the prefix for asset path
    assetPrefix: process.env.NODE_ENV === 'production' ? '/{next.js_Membership_Validation}' : '',
}


