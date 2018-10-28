import React from 'react';
import Link from 'next/link';

// @ts-ignore
import InlineSVG from 'svg-inline-react';

// @ts-ignore
import bowser from 'bowser';

import $ from 'jquery';

interface NavProps {
  items: ReadonlyArray<Array<string>>
};

export default class Nav extends React.Component<NavProps> {
  private isWebkit: boolean = false;
  private spMenuActive: boolean = false;
  state: {
    spMenuVisible: boolean;
  };

  constructor(props: NavProps) {
    super(props);
    this.handleHashClick = this.handleHashClick.bind(this);
    this.handleSpMenuButtonClick = this.handleSpMenuButtonClick.bind(this);
    this.state = {
      spMenuVisible: false
    };
  }

  componentDidMount() {
    this.isWebkit = bowser.parse(window.navigator.userAgent).engine.name === 'WebKit';
    window.addEventListener('resize', () => this.setState({ spMenuVisible: false }));
  }

  private handleHashClick(event: React.MouseEvent<HTMLAnchorElement>, hash: string) {
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
      if (path.startsWith('#')) {
        return (
          <li key={path}>
            <a href={path} onClick={(event) => this.handleHashClick(event, path)}>{label}</a>
          </li>
        )
      } else {
        return (
          <li key={path}>
            <Link href={path}><a>{label}</a></Link>
          </li>
        )
      }
    });

    return (
      <nav className={this.navClassNames}>
        <div className="o-nav__sp-menu-button" onClick={this.handleSpMenuButtonClick}>
          <i className="a-icon a-icon--hamburger"></i>
        </div>
        <ul className="o-nav__pc-menu">
          {itemEls}
        </ul>
        <ul className="o-nav__sp-menu">
          {itemEls}
        </ul>
      </nav>
    );
  }
}
