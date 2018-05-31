import '../sass/style.scss';

import Barba from './modules/barba';
import Typed from './modules/typed';
import axios from './modules/axios';
import imagesLoaded from './modules/imagesloaded.pkgd';

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

function getInTouchSubmitHandler() {
    const get_in_touch_form = document.get_in_touch_form;
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
            Snackbar.show({
                pos: 'bottom-center',
                showAction: false,
                text: 'Thank You! We will contact you soon.',
                duration: 5000
            });
            console.log('Success');
        } catch (error) {
            Snackbar.show({
                pos: 'bottom-center',
                showAction: false,
                text: 'Something went wrong. Make sure that the details filled are correct or try again later.',
                duration: 5000
            });
            console.log(error);
        }
    })
}

function newsltterSubmitHandler() {
    const newsletter_form = document.newsletter_form
    newsletter_form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const data = {
            email: this.newsletter_email.value
        }
        try {
            const response = await axios.post('/newsletter/subscribe', data);
            Snackbar.show({
                pos: 'bottom-center',
                showAction: false,
                text: 'Thank you for subscribing.',
                duration: 5000
            });
            console.log('Success');
        } catch (error) {
            Snackbar.show({
                pos: 'bottom-center',
                showAction: false,
                text: 'Something went wrong. Make sure that the details filled are correct or try again later.',
                duration: 5000
            });
            console.log(error);
        }
    })
}

const FadeTransition = Barba.BaseTransition.extend({
    start: function() {
        Promise
            .all([this.newContainerLoading, this.fadeOut()])
            .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
        return $(this.oldContainer).animate({ opacity: 0 }, 350).promise();
    },

    fadeIn: function() {
        const _this = this;
        const el = $(this.newContainer);

        $(this.oldContainer).hide();

        el.css({
            visibility : 'visible',
            opacity : 0,
        });

        el.animate({ opacity: 1 }, 350, function() {
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
    if($('.home').length) {
        const typed = new Typed('.typed-element', typedOptions);
        document.querySelector('#nav > a:nth-child(1)').classList.add('active');
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
        getInTouchSubmitHandler();
        newsltterSubmitHandler();
    };
});