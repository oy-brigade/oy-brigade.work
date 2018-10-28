import React from 'react';
import { PageProps } from 'pages/_app';

export default class extends React.Component {
  props: PageProps;
  render() {
    return (
      <div className="t-general">
        {this.props.children}
      </div>
    );
  }
}
