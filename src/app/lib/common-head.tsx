import Head from 'next/head';
import { description } from 'lib/constants.tsx';

interface HeadProps {
  title?: string
};

export default function CommonHead(props) {
  const { title = 'OY旅団/OY brigade' } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content="OY旅団/OY brigade" />
      <meta property="og:description" content="OY旅団はオリジナルゲームを作る同人サークルです。" />
      <meta property="og:url" content="https://www.oy-brigade.work" />
      <meta property="og:image" content="https://www.oy-brigade.work/static/favicon.svg" />
      <meta name="twitter:card" content="summary" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/static/favicon.svg" rel="shortcut icon" type="image/svg+xml" sizes="any" />
    </Head>
  );
}
