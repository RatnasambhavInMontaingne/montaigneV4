import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import Typed from './modules/typed';

$('#nav').addEventListener('click', navbar)

function navbar() {
  const x = $('#nav');
  if (x.className === 'nav') {
      x.className += ' responsive';
  } else {
      x.className = 'nav';
  }
}

const typedOptions = {
    typeSpeed: 40,
    strings: [
        'One Stop Shop For All Your Business Needs',
        'Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        'One Stop Shop For All Your Business Needs'
    ],
    loop: true
}

const typed = new Typed('.typed-element', typedOptions);
