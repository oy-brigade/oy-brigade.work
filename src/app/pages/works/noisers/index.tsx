import React from 'react';

import Head from 'next/head';

import 'static/css/app.styl';
import logoSrc from 'static/image/noisers/logo.png';
import WorksMainVisual from 'components/organisms/works-main-visual/_works-main-visual';

export default () => (
  <>
    <Head>
      <title>Noisers | Works | OY旅団/OY brigade</title>
    </Head>

    <WorksMainVisual
      title="Noisers"
      outline="C95体験版 C95 2日目 西タ47a で頒布！"
      bgColor="lightgray"
      bgImage={logoSrc}
      logoImage={logoSrc}></WorksMainVisual>

    <article className="o-works-article">
      <h2>頒布概要</h2>
      <table className="m-list-table">
        <tbody>
          <tr>
            <th>イベント</th>
            <td>コミックマーケット C95</td>
          </tr>
          <tr>
            <th>日時</th>
            <td>2018.12.30 日曜日 (C95 2日目)</td>
          </tr>
          <tr>
            <th>頒布場所</th>
            <td>C95 西地区-タ-47a</td>
          </tr>
          <tr>
            <th>サークル</th>
            <td>OY 旅団/OY brigade (<a href="https://www.oy-brigade.work">ホームページ</a>)</td>
          </tr>
        </tbody>
      </table>
    </article>

    <footer className="o-footer">
      <div className="o-footer__copy">
        Copyright 2018 OY brigade All rights reserved.
      </div>
    </footer>
  </>
);
