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

const animationEnd = (function(el) {
    const animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'mozAnimationEnd',
      WebkitAnimation: 'webkitAnimationEnd',
    };

    for (const t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
})(document.createElement('div'));

const memberDetails = [
    {
        firstName: 'Ratnasambhav',
        lastName: 'Priyadarshi',
        designation: 'Developer',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate, impedit, repudiandae, accusamus officiis officia unde error necessitatibus beatae dignissimos temporibus laudantium tempore autem reprehenderit ipsa nisi labore expedita mollitia?',
        social : [
            {
                icon: 'github',
                href: '#'
            },
            {
                icon: 'linkedin',
                href: '#'
            },
            {
                icon: 'twitter',
                href: '#'
            },
            {
                icon: 'instagram',
                href: '#'
            }
        ]
    },
    {
        firstName: 'Jhon',
        lastName: 'Wick',
        designation: 'Developer',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate, impedit, repudiandae, accusamus officiis officia unde error necessitatibus beatae dignissimos temporibus laudantium tempore autem reprehenderit ipsa nisi labore expedita mollitia?',
        social : [
            {
                icon: 'github',
                href: '#'
            },
            {
                icon: 'linkedin',
                href: '#'
            },
            {
                icon: 'twitter',
                href: '#'
            },
            {
                icon: 'instagram',
                href: '#'
            }
        ]
    },
    {
        firstName: 'Jhon',
        lastName: 'HHHJJJJKKKK',
        designation: 'ASDFGH',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate, impedit, repudiandae, accusamus officiis officia unde error necessitatibus beatae dignissimos temporibus laudantium tempore autem reprehenderit ipsa nisi labore expedita mollitia?',
        social : [
            {
                icon: 'github',
                href: '#'
            },
            {
                icon: 'linkedin',
                href: '#'
            },
            {
                icon: 'twitter',
                href: '#'
            },
            {
                icon: 'instagram',
                href: '#'
            }
        ]
    },
    {
        firstName: 'Jhon',
        lastName: 'HHHJJJJKKKK',
        designation: 'ASDFGH',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate, impedit, repudiandae, accusamus officiis officia unde error necessitatibus beatae dignissimos temporibus laudantium tempore autem reprehenderit ipsa nisi labore expedita mollitia?',
        social : [
            {
                icon: 'github',
                href: '#'
            },
            {
                icon: 'linkedin',
                href: '#'
            },
            {
                icon: 'twitter',
                href: '#'
            },
            {
                icon: 'instagram',
                href: '#'
            }
        ]
    },
    {
        firstName: 'Jhon',
        lastName: 'HHHJJJJKKKK',
        designation: 'ASDFGH',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate, impedit, repudiandae, accusamus officiis officia unde error necessitatibus beatae dignissimos temporibus laudantium tempore autem reprehenderit ipsa nisi labore expedita mollitia?',
        social : [
            {
                icon: 'github',
                href: '#'
            },
            {
                icon: 'linkedin',
                href: '#'
            },
            {
                icon: 'twitter',
                href: '#'
            },
            {
                icon: 'instagram',
                href: '#'
            }
        ]
    },
    {
        firstName: 'Jhon',
        lastName: 'HHHJJJJKKKK',
        designation: 'ASDFGH',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate, impedit, repudiandae, accusamus officiis officia unde error necessitatibus beatae dignissimos temporibus laudantium tempore autem reprehenderit ipsa nisi labore expedita mollitia?',
        social : [
            {
                icon: 'github',
                href: '#'
            },
            {
                icon: 'linkedin',
                href: '#'
            },
            {
                icon: 'twitter',
                href: '#'
            },
            {
                icon: 'instagram',
                href: '#'
            }
        ]
    },
    {
        firstName: 'Jhon',
        lastName: 'HHHJJJJKKKK',
        designation: 'ASDFGH',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate, impedit, repudiandae, accusamus officiis officia unde error necessitatibus beatae dignissimos temporibus laudantium tempore autem reprehenderit ipsa nisi labore expedita mollitia?',
        social : [
            {
                icon: 'github',
                href: '#'
            },
            {
                icon: 'linkedin',
                href: '#'
            },
            {
                icon: 'twitter',
                href: '#'
            },
            {
                icon: 'instagram',
                href: '#'
            }
        ]
    }
]

const changeMember = (image, index) => {
    $('.member-image.active').classList.remove('active')
    $(image).classList.add('active')
    const body = $('.team--info-body')
    body.classList.add('fadeOut')
    const memberDetail = memberDetails[index]
    setTimeout(() => {
        $('.first-name').innerHTML = memberDetail.firstName
        $('.last-name').innerHTML = memberDetail.lastName
        $('.designation').innerHTML = memberDetail.designation
        $('.details').innerHTML = memberDetail.details
        body.classList.remove('fadeOut')
        body.classList.add('fadeIn')
    }, 1000)
}

$('#member-1-image').on('click', changeMember('#member-1-image', 0))
$('#member-2-image').on('click', changeMember('#member-2-image', 1))
$('#member-3-image').on('click', changeMember('#member-3-image', 2))
$('#member-4-image').on('click', changeMember('#member-4-image', 3))
$('#member-5-image').on('click', changeMember('#member-5-image', 4))
$('#member-6-image').on('click', changeMember('#member-6-image', 5))
$('#member-7-image').on('click', changeMember('#member-7-image', 6))
