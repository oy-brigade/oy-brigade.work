const { createServer } = require('http');
const { resolve } = require('path');
const { parse } = require('url');
const pathToRegexp = require('path-to-regexp');
const functions = require('firebase-functions');

const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const NEXT_CONF = {
  dev: IS_DEVELOPMENT,
  dir: IS_DEVELOPMENT ? resolve(__dirname, '../app') : undefined,
  conf: !IS_DEVELOPMENT ? { distDir: 'app' } : undefined
};
const REGEXP_PATH_NEWS = pathToRegexp('/news/:slug');

let app;
let handle;
const router = (app, handle) => (req, res) => {
  const parsedUrl = parse(req.url, true);
  const { pathname, query } = parsedUrl;
  let matches = null;

  if ((matches = REGEXP_PATH_NEWS.exec(pathname))) {
    app.render(req, res, '/news/entry', query);
  } else if (pathname !== '/' && (matches = /^(.+)\/$/.exec(pathname))) {
    app.render(req, res, matches[1], query);
  } else {
    handle(req, res, parsedUrl);
  }
};

if (IS_DEVELOPMENT) {
  app = require('next')(NEXT_CONF);
  handle = app.getRequestHandler();
  app.prepare().then(() => {
    const server = createServer(router(app, handle));
    server.listen(PORT, () => {
      console.log(`Next.js dev server is listening on http://localhost:${PORT}`)
    });
  });
}

exports.next = functions.https.onRequest((req, res) => {
  app = app || require('next')(NEXT_CONF);
  handle = handle || app.getRequestHandler();
  return app.prepare().then(() => router(app, handle)(req, res));
});
