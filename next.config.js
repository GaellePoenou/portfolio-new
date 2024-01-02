/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },

  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = nextConfig;
