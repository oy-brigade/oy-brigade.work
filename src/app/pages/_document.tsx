import Document, { NextDocumentContext, Head, Main, NextScript } from 'next/document';

import { description as DESCRIPTION } from 'lib/constants';

export default class extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <title>OY旅団/OY brigade</title>
          <meta name="description" content={DESCRIPTION} />
          <meta property="og:title" content="OY旅団/OY brigade" />
          <meta property="og:description" content="OY旅団はオリジナルゲームを作る同人サークルです。" />
          <meta property="og:url" content="https://www.oy-brigade.work" />
          <meta property="og:image" content="https://www.oy-brigade.work/static/favicon.svg" />
          <meta name="twitter:card" content="summary" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/static/favicon.svg" rel="shortcut icon" type="image/svg+xml" sizes="any" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
