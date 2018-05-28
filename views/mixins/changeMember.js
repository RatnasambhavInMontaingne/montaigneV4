const memberDetails = [
    {
        firstName: 'Ratnasambhav',
        lastName: 'Priyadarshi',
        designation: 'Developer',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate, impedit, repudiandae, accusamus officiis officia unde error necessitatibus beatae dignissimos temporibus laudantium tempore autem reprehenderit ipsa nisi labore expedita mollitia?',
        social: [
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
        social: [
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
        social: [
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
        social: [
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
        social: [
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
        social: [
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
        social: [
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
];

function changeMember(image, index) {
    $('.member-image.active').removeClass('active');
    $(image).addClass('active');
    const body = $('.team--info-body');
    body.addClass('fadeOutDown');
    const memberDetail = memberDetails[index];
    setTimeout(() => {
        $('.first-name').html(memberDetail.firstName);
        $('.last-name').html(memberDetail.lastName);
        $('.designation').html(memberDetail.designation);
        $('.details').html(memberDetail.details);
        body.removeClass('fadeOutDown');
        body.addClass('fadeInDown');
    }, 500);
}
