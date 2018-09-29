const { promisify } = require('util');
const { spawn } = require('child_process');
const { writeFile } = require('fs');

const babel = require('@babel/core');
const fse = require('fs-extra');

function buildNext(dir) {
  return new Promise((resolve, reject) => {
    let proc = spawn('./node_modules/.bin/next',
                     ['build', dir],
                     { stdio: 'inherit' });

    proc.on('exit', () => resolve());
    proc.on('error', (error) => reject(error));
  });
}

task('build', ['build:app', 'build:function', 'build:package']);

namespace('build', () => {
  task('app', { async: true }, async () => {
    await buildNext('./src/app')
    await fse.copy('./dist/app/static', './dist/public/_next/static');
  });

  task('function', { async: true }, async () => {
    const result = await babel.transformFileAsync(
      './src/functions/index.js',
      { babelrc: false,
        presets: [
          ['@babel/preset-env', { targets: { node: '6.11.5' } }]
        ],
        plugins: ['transform-node-env-inline'] }
    );
    await fse.mkdirp('./dist/functions');
    await promisify(writeFile)('./dist/index.js', result.code);
  });

  task('package', { async: true }, async () => {
    await fse.copy('./package.json', './dist/package.json');
    await fse.ensureSymlink('./node_modules', './dist/node_modules');
  })
});

task('clean', { async: true }, async () => {
  await fse.remove('./dist');
});
