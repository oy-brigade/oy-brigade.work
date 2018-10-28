import App, { NextAppContext, DefaultAppIProps, AppProps, Container } from 'next/app';

import { description as DESCRIPTION } from 'lib/constants';

export default class extends App {
  static async getInitialProps ({ Component, ctx }: NextAppContext): Promise<DefaultAppIProps> {
    let pageProps: DefaultAppIProps = {} as DefaultAppIProps;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps: {
        ...pageProps
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
