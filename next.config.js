/** @type {import('next').NextConfig} */
const nextConfig = {
    // Use the prefix for asset path
    assetPrefix: process.env.NODE_ENV === 'production' ? '/{repository-name}' : '',
}


