import Head from 'next/head';

interface HeadProps {
  title?: string
};

export default function CommonHead(props) {
  const { title = 'OY旅団/OY brigade' } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/static/favicon.svg" rel="shortcut icon" type="image/svg+xml" sizes="any" />
    </Head>
  );
}
