import InlineSVG from 'svg-inline-react';
import 'static/css/app.styl';
import logo from 'static/image/logo.svg';

export default () => (
  <div class="t-general">
    <nav class="o-nav">
      <ul>
        <li><a href="#top">Top</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

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
          <div class="m-home-work">
            <div class="m-home-work__images"></div>
            <footer class="m-home-work__info">
              <div class="m-home-work__title">音ハメ(仮)</div>
              <div class="m-home-work__date">2018・C94にて頒布</div>
            </footer>
          </div>
          <div class="m-home-work">
            <div class="m-home-work__images"></div>
            <footer class="m-home-work__info">
              <div class="m-home-work__title">Right → Right 2</div>
              <div class="m-home-work__date">2017・C93にて頒布</div>
            </footer>

          </div>
          <div class="m-home-work">
            <div class="m-home-work__images"></div>
            <footer class="m-home-work__info">
              <div class="m-home-work__title">Right → Right</div>
              <div class="m-home-work__date">2016・C91にて頒布</div>
            </footer>
          </div>
        </main>
      </div>
    </section>

    <section class="o-home-section" id="team">
      <div class="t-general__normal-layout">
        <header class="o-home-section__title">Team</header>
        <main class="o-home-section__content m-home-team">
          <div class="m-home-team__member">
            <div class="m-home-team__member-icon-wrapper">
              <img class="m-home-team__member-icon" alt="" src="" />
            </div>
            <div class="m-home-team__member-name">がんたん</div>
            <div class="m-home-team__member-role">Illust</div>
            <ul class="m-home-team__member-contacts">
              <li><a href="https://twitter.com/guntankoba" target="_blank">@guntankoba (Twitter)</a></li>
              <li><a href="https://pixiv.me/guntankoba" target="_blank">guntankoba (pixiv)</a></li>
            </ul>
          </div>
          <div class="m-home-team__member">
            <div class="m-home-team__member-icon-wrapper">
              <img class="m-home-team__member-icon" alt="" src="" />
            </div>
            <div class="m-home-team__member-name">くれいじー</div>
            <div class="m-home-team__member-role">Illust</div>
            <ul class="m-home-team__member-contacts">
              <li><a href="https://twitter.com/crazy_life1122" target="_blank">@crazy_life1122 (Twitter)</a></li>
            </ul>
          </div>
          <div class="m-home-team__member">
            <div class="m-home-team__member-icon-wrapper">
              <img class="m-home-team__member-icon" alt="" src="" />
            </div>
            <div class="m-home-team__member-name">パフーハ</div>
            <div class="m-home-team__member-role">Program</div>
            <ul class="m-home-team__member-contacts">
              <li><a href="https://twitter.com/pafuuha" target="_blank">@pafuuha (Twitter)</a></li>
            </ul>
          </div>
          <div class="m-home-team__member">
            <div class="m-home-team__member-icon-wrapper">
              <img class="m-home-team__member-icon" alt="" src="" />
            </div>
            <div class="m-home-team__member-name">Nasubeing</div>
            <div class="m-home-team__member-role">Sound</div>
            <ul class="m-home-team__member-contacts">
              <li><a href="https://twitter.com/Nasubenign" target="_blank">@Nasubenign (Twitter)</a></li>
              <li><a href="https://soundcloud.com/nasubeing" target="_blank">nasubeing (SoundCloud)</a></li>
            </ul>
          </div>
          <div class="m-home-team__member">
            <div class="m-home-team__member-icon-wrapper">
              <img class="m-home-team__member-icon" alt="" src="" />
            </div>
            <div class="m-home-team__member-name">Yadex205</div>
            <div class="m-home-team__member-role">Web</div>
            <ul class="m-home-team__member-contacts">
              <li><a href="https://twitter.com/yadex205_vj" target="_blank">@yadex205_vj (Twitter)</a></li>
            </ul>
          </div>
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
