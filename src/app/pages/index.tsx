import React from 'react';
import Link from 'next/link';
import $ from 'jquery';

// @ts-ignore: Avoid noImplicitAny: true error.
import InlineSVG from 'svg-inline-react';

import { description, CONTENT_DELIVERY_API_KEY } from 'lib/constants';
import { Client as APIClient, News } from 'lib/api';

import 'static/css/app.styl';
import logo from 'static/image/logo.svg';
import General from 'components/templates/general/_general';
import Nav from 'components/organisms/nav/_nav';
import HomeWork, { HomeWorkImage } from 'components/molecules/home-work/_home-work';
import HomeTeam, { HomeTeamMember } from 'components/molecules/home-team/_home-team';

const navItems = [
  ['#top', 'Top'],
  ['#news', 'News'],
  ['#about', 'About'],
  ['#works', 'Works'],
  ['#team', 'Team'],
  ['#contact', 'Contact']
];

interface Props {}

interface State {
  newsList: Array<News>
}

export default class extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      newsList: []
    };
  }

  async componentDidMount() {
    try {
      this.setState({
        newsList: await new APIClient().newsEntries()
      });
    } catch (error) {}
  }

  render() {
    return (
      <General>
        <Nav items={navItems} />

        <div className="o-main-visual" id="top">
          <InlineSVG className="o-main-visual__logo-wrapper" element="div" src={logo} />
        </div>

        <section className="o-home-section" id="news">
          <div className="t-general__normal-layout">
            <header className="o-home-section__title">News</header>
            <main className="o-home-section__content">
              <div className="m-home-news">
                <ul className="m-home-news__list">
                  {this.state.newsList.map(news => (
                    <li key={news.slug}>
                      <Link href={`/news/${news.slug}`}><a className="m-home-news__item">
                        <div className="m-home-news__item-date">{news.published_at}</div>
                        <div className="m-home-news__item-title">{news.title}</div>
                      </a></Link>
                    </li>
                  ))}
                </ul>
                <div className="m-home-news__readmore-wrapper">
                  <Link href="/news"><a>Read More</a></Link>
                </div>
              </div>
            </main>
          </div>
        </section>

        <section className="o-home-section" id="about">
          <div className="t-general__normal-layout">
            <header className="o-home-section__title">About</header>
            <main className="o-home-section__content">{description}</main>
          </div>
        </section>

        <section className="o-home-section" id="works">
          <div className="t-general__normal-layout">
            <header className="o-home-section__title">Works</header>
            <main className="o-home-section__content">
              <HomeWork title="音ハメ(仮)" date="2018・C94にて頒布">
                <HomeWorkImage src="/static/image/otohame-kari/capture01.jpg" />
                <HomeWorkImage src="/static/image/otohame-kari/capture02.png" />
              </HomeWork>
              <HomeWork title="Right → Right 2" date="2017・C93にて頒布">
                <HomeWorkImage src="/static/image/rir02/logo.png" />
                <HomeWorkImage src="/static/image/rir02/image01.png" />
              </HomeWork>
              <HomeWork title="Right → Right" date="2016・C91にて頒布"></HomeWork>
            </main>
          </div>
        </section>

        <section className="o-home-section" id="team">
          <div className="t-general__normal-layout">
            <header className="o-home-section__title">Team</header>
            <main className="o-home-section__content">
              <HomeTeam>
                <HomeTeamMember name="がんたん" role="Illust" twitter="guntankoba" pixiv="guntankoba" />
                <HomeTeamMember name="くれいじー" role="Illust" twitter="crazy_life1122" />
                <HomeTeamMember name="パフーハ" role="Program" twitter="pafuuha" />
                <HomeTeamMember name="Nasubeing" role="Sound" twitter="Nasubenign" soundcloud="nasubeing" />
                <HomeTeamMember name="Yadex205" role="Web" twitter="yadex205_vj" />
              </HomeTeam>
            </main>
          </div>
        </section>

        <section className="o-home-section" id="contact">
          <div className="t-general__normal-layout">
            <header className="o-home-section__title">Contact</header>
            <main className="o-home-section__content m-home-contact">
              <ul>
                <li><a href="https://twitter.com/oy_brigade" target="_blank">@oy_brigade</a> on Twitter</li>
                <li>oybrigade@gmail.com</li>
              </ul>
            </main>
          </div>
        </section>

        <footer className="o-footer">
          <div className="o-footer__copy">Copyright 2016-current OY brigade All rights reserved.</div>
        </footer>
      </General>
    )
  }
};
