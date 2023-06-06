const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { layers: true, topLevelAwait: true };
    config.plugins.push(
        new NextFederationPlugin({
          name: 'hostApp',
          remotes: {
            // remoteApp: `remoteApp@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
              remoteApp: `remoteApp@https://mf-remote-app.netlify.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
          exposes: {}
        })
    );
    return config;
  }
}

module.exports = nextConfig
