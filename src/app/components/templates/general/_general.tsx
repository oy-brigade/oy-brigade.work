import { Component } from 'preact';
import bowser from 'bowser';
import { PageProps } from 'pages/_app';

export default class extends Component {
  props: PageProps;

  get classNames() {
    const names = ['t-general'];
    const { browser, os } = this.props.browserInfo;
    names.push(browser.name === 'Internet Explorer' ? 'is-ie' : 'is-not-ie');
    return names.join(' ');
  }

  render() {
    return (
      <div class={this.classNames}>
        {this.props.children}
      </div>
    );
  }
}
