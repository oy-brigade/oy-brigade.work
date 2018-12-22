import React from 'react';

interface Props {
  title: string;
  outline?: string;
  bgImage?: string;
  bgColor?: string;
  logoImage?: string;
}

export default function(props: Props) {
  const heroElement = (
    <div className="o-works-main-visual__hero"
         style={{
           backgroundImage: props.bgImage ? `url(${props.bgImage})` : 'none',
           backgroundColor: props.bgColor || '#9fcd6a'
         }}></div>
  );

  const logoElement = props.logoImage ? (
    <img className="o-works-main-visual__logo"
         alt={props.title}
         src={props.logoImage}></img>
  ) : null;

  return (
    <div className="o-works-main-visual">
      {heroElement}
      {logoElement}
      <div className="o-works-main-visual__text">
        <h1 className="o-works-main-visual__title">{props.title}</h1>
        <p>{props.outline}</p>
      </div>
    </div>
  )
}
