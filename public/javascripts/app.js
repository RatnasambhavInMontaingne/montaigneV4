import '../sass/style.scss';

import Barba from './modules/barba';
import Typed from './modules/typed';
import axios from './modules/axios';
import imagesLoaded from './modules/imagesloaded.pkgd';
import changeMember from './modules/changeMember';

$('#nav').click(navbar);

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

const resizeGridItem = item => {
    const grid = document.querySelector('.blog_grid');
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems() {
    const allItems = document.querySelectorAll('.blog_grid--item');
    if(allItems) allItems.forEach(item => resizeGridItem(item));
}

function resizeItemAfterImageLoad(instance) {
    const item = instance.elements[0];
    resizeGridItem(item);
}

function resizeAllAfterImageLoad() {
    const allItems = document.querySelectorAll('.blog_grid--item');
    if(allItems) allItems.forEach(item => imagesLoaded(item, resizeItemAfterImageLoad));
}

const FadeTransition = Barba.BaseTransition.extend({
    start: function() {
        Promise
            .all([this.newContainerLoading, this.fadeOut()])
            .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
        $(this.oldContainer).css({position: 'relative'});
        return $(this.oldContainer).animate({
            opacity: 0,
            right: '100vw'
        }, 400).promise();
    },

    fadeIn: function() {
        const _this = this;
        const el = $(this.newContainer);

        $(this.oldContainer).hide();

        el.css({
            visibility : 'visible',
            opacity : 0,
            position: 'relative',
            left: '100vw'
        });

        el.animate({
            opacity: 1,
            left: '0'
        }, 250, function() {
            _this.done();
        });
    }
})

Barba.Pjax.getTransition = function() {
    return FadeTransition;
};

window.onload = function() {
    Barba.Pjax.start();
}

Barba.Dispatcher.on('transitionCompleted', function() {
    if($('.typed-element').length) {
        const typed = new Typed('.typed-element', typedOptions);
    }

    if($('.blog_grid').length) {
        resizeAllAfterImageLoad();
        window.addEventListener("resize", resizeAllGridItems);
    }

    if($('.skillset').length) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.click(function (e) {
                e.preventDefault();
                $(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                console.log($(this.getAttribute('href')));
            });
        });
    }

    const get_in_touch_form = document.get_in_touch_form;
    if(get_in_touch_form) {
        get_in_touch_form.addEventListener('submit', async function(e) {
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
});