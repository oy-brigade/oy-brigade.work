import React from 'react';

import Head from 'next/head';

import 'static/css/app.styl';

export default () => (
  <>
    <Head>
      <title>Noisers (C95頒布) | Downloads | OY旅団/OY brigade</title>
    </Head>

    <section className="o-dl-section">
      <div className="o-dl-section__inner">
        <div className="o-dl-section__title">C95頒布 Noisers ダウンロードページ</div>
        <form className="m-dl-form">
          <div className="m-dl-form__input-container">
            <input type="text" placeholder="ダウンロードコード" />
          </div>
          <div className="m-dl-form__button-container">
            <button>ダウンロード</button>
          </div>
        </form>
      </div>
    </section>
  </>
);
