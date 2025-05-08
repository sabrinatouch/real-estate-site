/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: `/${process.env.CLOUDINARY_CLOUD_NAME}/**`,
                search: '',
            }
        ]
    }
};

export default nextConfig;
