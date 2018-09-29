const { createServer } = require('http');
const { resolve } = require('path');
const functions = require('firebase-functions');
require('@zeit/next-preact/alias')();

const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const NEXT_CONF = {
  dev: IS_DEVELOPMENT,
  dir: IS_DEVELOPMENT ? resolve(__dirname, '../app') : undefined,
  conf: !IS_DEVELOPMENT ? { distDir: 'app' } : undefined
};

let app;
let handle;

if (IS_DEVELOPMENT) {
  app = require('next')(NEXT_CONF);
  handle = app.getRequestHandler();
  app.prepare().then(() => {
    const server = createServer(handle);
    server.listen(PORT, () => {
      console.log(`Next.js dev server is listening on http://localhost:${PORT}`)
    });
  });
}

exports.next = functions.https.onRequest((req, res) => {
  app = app || require('next')(NEXT_CONF);
  handle = handle || app.getRequestHandler();
  return app.prepare().then(() => handle(req, res));
});
