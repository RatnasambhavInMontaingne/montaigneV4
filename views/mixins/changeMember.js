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
]

function changeMember(image, index) {
    const $ = document.querySelector.bind(document);
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