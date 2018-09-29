const withTypeScript = require('@zeit/next-typescript');
const withPreact = require('@zeit/next-preact');
const withSass = require('@zeit/next-sass');

const sassGlobImporter = require('node-sass-glob-importer');

module.exports = withSass(withTypeScript(withPreact({
  sassLoaderOptions: {
    importer: sassGlobImporter()
  },
  distDir: '../../dist/app'
})));
