module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/[local]", // Maps "/" to [local]/(home)
      },
    ];
  },
  webpack(config, { isServer }) {
    // Add the rule to handle SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};