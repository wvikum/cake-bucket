module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-domain.com", // Replace with your actual domain
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
};
