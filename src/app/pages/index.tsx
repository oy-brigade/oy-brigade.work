import InlineSVG from 'svg-inline-react';

import 'static/css/app.styl';
import logo from 'static/image/logo.svg';
import Nav from 'components/organisms/nav/_nav';
import HomeWork from 'components/molecules/home-work/_home-work';
import HomeTeam, { HomeTeamMember } from 'components/molecules/home-team/_home-team';

const navItems = [['#top', 'Top'], ['#about', 'About'], ['#works', 'Works'], ['#team', 'Team'], ['#contact', 'Contact']];

export default (props) => (
  <div class="t-general">
    <Nav items={navItems} />

    <div class="o-main-visual" id="top">
      <InlineSVG className="o-main-visual__logo-wrapper" element="div" src={logo} />
    </div>

    <section class="o-home-section" id="about">
      <div class="t-general__normal-layout">
        <header class="o-home-section__title">About</header>
        <main class="o-home-section__content">
          OY旅団 (OY brigade)は、オリジナルゲームの制作を主な活動とする同人サークルです。
          主人公をアイテムだけでゴールへ導く「Right → Right」などをはじめ、
          制作したオリジナルの同人ゲームをコミックマーケット等で頒布しております。
        </main>
      </div>
    </section>

    <section class="o-home-section" id="works">
      <div class="t-general__normal-layout">
        <header class="o-home-section__title">Works</header>
        <main class="o-home-section__content">
          <HomeWork title="音ハメ(仮)" date="2018・C94にて頒布"></HomeWork>
          <HomeWork title="Right → Right 2" date="2017・C93にて頒布"></HomeWork>
          <HomeWork title="Right → Right" date="2016・C91にて頒布"></HomeWork>
        </main>
      </div>
    </section>

    <section class="o-home-section" id="team">
      <div class="t-general__normal-layout">
        <header class="o-home-section__title">Team</header>
        <main class="o-home-section__content">
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

    <section class="o-home-section" id="contact">
      <div class="t-general__normal-layout">
        <header class="o-home-section__title">Contact</header>
        <main class="o-home-section__content m-home-contact">
          <ul>
            <li><a href="https://twitter.com/oy_brigade" target="_blank">@oy_brigade</a> on Twitter</li>
          </ul>
        </main>
      </div>
    </section>

    <footer class="o-footer">
      <div class="o-footer__copy">Copyright 2016-current OY brigade All rights reserved.</div>
    </footer>
  </div>
);
