/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/dwsvtkzk9/image/upload/v1708529274/AquaVigil/',
            },
        ],
    },
};

export default nextConfig;
