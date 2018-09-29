import { Component } from 'preact';
import Link from 'next/link';

import bowser from 'bowser';
import $ from 'jquery';

interface NavProps {
  items: ReadonlyArray<Array<string>>
};

export default class Nav extends Component<NavProps> {
  private isWebkit: boolean;

  constructor(props) {
    super(props);
    this.handleHashClick = this.handleHashClick.bind(this);
  }

  componentDidMount() {
    this.isWebkit = bowser.parse(window.navigator.userAgent).engine.name === 'WebKit';
  }

  handleHashClick(event, hash) {
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    const pos = document.getElementById(id).getBoundingClientRect().top;
    const scrollable = $(this.isWebkit ? 'body' : 'html');
    scrollable.stop();
    scrollable.animate({ scrollTop: window.scrollY + pos }, 500, 'swing');
    event.preventDefault();
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
      <nav class="o-nav">
        <ul>
          {itemEls}
        </ul>
      </nav>
    );
  }
}
