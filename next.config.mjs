/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/bobby-portfolio",
    output: "export",  // <=== enables static exports
    distDir: 'out',
    reactStrictMode: true,
  };

export default nextConfig;
