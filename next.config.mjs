/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org'
          },
        
    
        ]
      },
      env: {
        TMDB_TOKEN: process.env.TMDB_TOKEN,
      },
};


export default nextConfig;
