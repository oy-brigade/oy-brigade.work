import $ from 'jquery';
import bowser from 'bowser';

document.addEventListener('DOMContentLoaded', () => {
  const environment = bowser.parse(window.navigator.userAgent);
});
