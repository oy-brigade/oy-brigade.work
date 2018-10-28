import App, { NextAppContext, Container } from 'next/app';
import Head from 'next/head';
import bowser from 'bowser';

import { description as DESCRIPTION } from 'lib/constants';

export interface PageProps {
  browserInfo: { browser: any; os: any; engine: any; platform: any };
};

export default class extends App {
  props: {
    Component: any;
    pageProps: PageProps;
  };

  static async getInitialProps ({ Component, ctx, req }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps: {
        ...pageProps,
        browserInfo: bowser.parse(ctx.req.headers['user-agent'])
      }
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps}></Component>
      </Container>
    );
  }
}
