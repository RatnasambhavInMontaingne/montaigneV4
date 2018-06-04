import '../sass/style.scss';

import Barba from './modules/barba';
import Typed from './modules/typed';
import axios from './modules/axios';
import imagesLoaded from './modules/imagesloaded.pkgd';

function navbar() {
  const x = $('#nav');
  x.toggleClass('responsive');
}

const typedOptions = {
    strings: [
        'Heard of innovation incubated to become invincible businesses? That\'s our forte.',
        'The road to money is bumpy. Our strategy breathers can get you through though.',
        'Best work comes from the best team. We\'d love to let that grow. You get the point.'
    ],
    typeSpeed: 30,
    backDelay: 3000,
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

function workingWithUsSubmitHandler() {
    const working_with_us_form = document.working_with_us;
    working_with_us_form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData();
        const resumeInput = document.querySelector('#resume');
        formData.append('resume', resumeInput.files[0]);
        formData.append('name', this.name.value);
        formData.append('number', this.number.value);
        formData.append('email', this.email.value);
        formData.append('interest', this.interest.value);
        try {
            const response = await axios.post('/working_with_us', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            Snackbar.show({
                pos: 'bottom-center',
                showAction: false,
                text: response.data.message,
                duration: 5000
            });
        } catch(error) {
            Snackbar.show({
                pos: 'bottom-center',
                showAction: false,
                text: 'Something went wrong. Make sure that the details filled are correct and the resume is a PDF or Word file or try again later.',
                duration: 5000
            });
            console.error(error);
        }
    });
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
    });
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
    $('#nav').click(navbar);

    if($('.home').length) {
        const typed = new Typed('.typed-element', typedOptions);
        $('.nav a').css('color', '#fff');
        $('#nav > a:nth-child(1)').addClass('active-1');
    }

    if($('.blog_grid').length) {
        resizeAllAfterImageLoad();
        window.addEventListener("resize", resizeAllGridItems);
        $('#nav > a:nth-child(3)').addClass('active-2');
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
        $('#nav > a:nth-child(2)').addClass('active-2');
    }

    const get_in_touch_form = document.get_in_touch_form;
    if(get_in_touch_form) {
        getInTouchSubmitHandler();
        newsltterSubmitHandler();
        $('.nav').css('background-color', '#fff');
        $('.nav a').css('color', '#000');
        $('#nav > a:nth-child(6)').addClass('active-6');
    };

    if($('.working_with_us').length) {
        $('.nav a').css('color', '#fff');
        $('#nav > a:nth-child(5)').addClass('active-5');
        workingWithUsSubmitHandler();
    }

    if($('.our_story').length) {
        $('#nav > a:nth-child(4)').addClass('active-2');
    }
});