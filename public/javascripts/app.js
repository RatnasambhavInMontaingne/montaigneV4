import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import Typed from './modules/typed';
import axios from './modules/axios';
import imagesLoaded from './modules/imagesloaded.pkgd';

$('#nav').on('click', navbar)

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

if ($('.typed-element')) {
    const typed = new Typed('.typed-element', typedOptions);
}

$$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        $(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const get_in_touch_form = document.get_in_touch_form;
if(get_in_touch_form) {
    get_in_touch_form.on('submit', async function(e) {
        e.preventDefault();
        const data = {
            name: this.name.value,
            number: this.number.value,
            organisation: this.organisation.value,
            email: this.email.value,
            subject: this.subject.value,
            message: this.message.value,
        }
        try {
            const response = await axios.post('/get_in_touch', data);
            console.log(response.data.message);
        } catch (error) {
            console.log(error);
        }
    })
}

const resizeGridItem = item => {
    const grid = $('.blog_grid');
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems() {
    const allItems = $$('.blog_grid--item');
    if(allItems) allItems.map(item => resizeGridItem(item));
}

function resizeItemAfterImageLoad(instance) {
    const item = instance.elements[0];
    resizeGridItem(item);
}

function resizeAllAfterImageLoad() {
    const allItems = $$('.blog_grid--item');
    if(allItems) allItems.map(item => imagesLoaded(item, resizeItemAfterImageLoad));
}
resizeAllAfterImageLoad();

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);
