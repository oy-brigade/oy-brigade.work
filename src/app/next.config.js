const withTypeScript = require('@zeit/next-typescript');
const withStylus = require('@zeit/next-stylus');

module.exports = withStylus(withTypeScript({
  distDir: '../../dist/app',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg/,
      use: 'raw-loader'
    })

    return config;
  }
}));
