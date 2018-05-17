import '../sass/style.scss';

import { $, $$ } from './modules/bling';

$('#nav').addEventListener('click', navbar)

function navbar() {
  const x = $('#nav');
  if (x.className === 'nav') {
      x.className += ' responsive';
  } else {
      x.className = 'nav';
  }
}
