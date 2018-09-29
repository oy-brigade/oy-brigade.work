import $ from 'jquery';
import bowser from 'bowser';

document.addEventListener('DOMContentLoaded', () => {
  const environment = bowser.parse(window.navigator.userAgent);

  for (let anchor of Array.from(document.querySelectorAll('.o-nav a'))) {
    anchor.addEventListener('click', (event) => {
      let scrollable = environment.engine.name === 'WebKit' ? 'body' : 'html';
      let target = document.getElementById(anchor.attributes.href.value.slice(1));
      $(scrollable).stop();
      $(scrollable).animate({ scrollTop: window.scrollY + target.getBoundingClientRect().y }, 500, 'swing');
      event.preventDefault();
    });
  }
});
