const nextConfig = {
  trailingSlash: false,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  sassOptions: {
    additionalData: `
      @import "src/shared/styles/_breakpoints.scss";
      @import "src/shared/styles/_colors.scss";
      @import "src/shared/styles/_mixins.scss";
      @import "src/shared/styles/_variables.scss";
    `,
  },
  images: {
    domains: ['example.com'],
  },
};

export default nextConfig;
