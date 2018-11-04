import React from 'react';

import { NextContext } from 'next';
import Head from 'next/head';
import Error from 'next/error';
import { getNewsEntries, News } from 'lib/api/news';
import { getNewsSlug } from 'lib/util';

import 'static/css/app.styl';
import General from 'components/templates/general/_general';
import Nav from 'components/organisms/nav/_nav';
import NewsArticle from 'components/molecules/news-article/_news-article';

const navItems = [
  ['/', 'Top']
];

interface Props {
  entry?: News;
}

export default class extends React.Component<Props> {
  static async getInitialProps({ asPath }: NextContext): Promise<Props> {
    const slug = getNewsSlug(asPath);
    const props: Props = {};

    try {
      if (slug) {
        props.entry =  (await getNewsEntries({ 'fields.slug': slug }))[0];
      }
    } catch (error) {}

    return props;
  }

  render() {
    if (!this.props.entry) {
      return <Error statusCode={404} />;
    }

    const { entry } = this.props;

    return (
      <General>
        <Head>
          <title>{entry.title} | News | OY旅団/OY brigade</title>
        </Head>

        <Nav items={navItems}></Nav>

        <section className="o-news-section">
          <div className="t-general__normal-layout">
            <header className="o-home-section__title">{entry.title}</header>
            <main className="o-news-section__content">
              <NewsArticle article={entry.article} />
            </main>
          </div>
        </section>

        <footer className="o-footer">
          <div className="o-footer__copy">
            Copyright 2016-current OY brigade All rights reserved.
          </div>
        </footer>
      </General>
    )
  }
}
