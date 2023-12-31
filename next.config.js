/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['links.papareact.com', 'papareact.com', 'cdn.sanity.io'],
    },
};

module.exports = nextConfig;
