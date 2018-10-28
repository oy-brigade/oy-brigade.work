import React from 'react';
import Link from 'next/link';
import InlineSVG from 'svg-inline-react';

import $ from 'jquery';

interface NavProps {
  items: ReadonlyArray<Array<string>>
};

export default class Nav extends React.Component<NavProps> {
  private isWebkit: boolean;
  private spMenuActive: boolean;
  state: {
    spMenuVisible: boolean;
  };

  constructor(props) {
    super(props);
    this.handleHashClick = this.handleHashClick.bind(this);
    this.handleSpMenuButtonClick = this.handleSpMenuButtonClick.bind(this);
    this.state = {
      spMenuVisible: false
    };
  }

  componentDidMount() {
    this.isWebkit = false // bowser.parse(window.navigator.userAgent).engine.name === 'WebKit';
    window.addEventListener('resize', () => this.setState({ spMenuVisible: false }));
  }

  private handleHashClick(event, hash) {
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    const pos = document.getElementById(id).getBoundingClientRect().top;
    const scrollable = $(this.isWebkit ? 'body' : 'html');
    scrollable.stop();
    scrollable.animate({ scrollTop: window.scrollY + pos }, 500, 'swing');
    this.setState({ spMenuVisible: false });
    event.preventDefault();
  }

  private handleSpMenuButtonClick() {
    const visibility = this.state.spMenuVisible;
    this.setState({ spMenuVisible: !visibility });
  }

  private get navClassNames() {
    const names = ['o-nav'];
    if (this.state.spMenuVisible) {
      names.push('o-nav--sp-menu-visible');
    }
    return names.join(' ');
  }

  render() {
    const { items } = this.props;
    if (!items) { return null; }

    const itemEls = items.map(item => {
      const [path, label, options = {}] = item;
      const callback = (event) => {
        console.log(window)
      };
      if (path.startsWith('#')) {
        return <li><a href={path} onClick={(event) => this.handleHashClick(event, path)}>{label}</a></li>
      } else {
        return <li><Link href={path}><a>{label}</a></Link></li>
      }
    });

    return (
      <nav class={this.navClassNames}>
        <div class="o-nav__sp-menu-button" onClick={this.handleSpMenuButtonClick}>
          <i class="a-icon a-icon--hamburger"></i>
        </div>
        <ul class="o-nav__pc-menu">
          {itemEls}
        </ul>
        <ul class="o-nav__sp-menu">
          {itemEls}
        </ul>
      </nav>
    );
  }
}
