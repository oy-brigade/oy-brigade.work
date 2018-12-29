import React from 'react';

import Head from 'next/head';

import 'static/css/app.styl';

interface Props {};

export default class extends React.Component<Props> {
  inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);

    this.inputRef = React.createRef();
  }

  handleClick() {
    const pass = this.inputRef.current.value;
    if (pass === 'm5EG12eP') {
      location.href = 'https://www.dropbox.com/s/5r0d3ybniiygbgj/noisers_trial_c95.zip?dl=0';
    } else {
      location.reload();
    }
  }

  render() {
    return (
      <>
        <Head>
          <title>Noisers (C95頒布) | Downloads | OY旅団/OY brigade</title>
        </Head>

        <section className="o-dl-section">
          <div className="o-dl-section__inner">
            <div className="o-dl-section__title">C95頒布 Noisers ダウンロードページ</div>
            <div className="m-dl-form">
              <div className="m-dl-form__input-container">
                <input type="text" placeholder="ダウンロードコード" ref={this.inputRef} />
              </div>
              <div className="m-dl-form__button-container">
                <button onClick={this.handleClick.bind(this)}>ダウンロード</button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
