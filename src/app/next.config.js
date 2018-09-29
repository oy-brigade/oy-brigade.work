const withTypeScript = require('@zeit/next-typescript');
const withPreact = require('@zeit/next-preact');
const withStylus = require('@zeit/next-stylus');

module.exports = withStylus(withTypeScript(withPreact({
  distDir: '../../dist/app',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg/,
      use: 'raw-loader'
    })

    return config;
  }
})));
