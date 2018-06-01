const memberDetails = [
    {
        firstName: 'Ananya',
        lastName: 'Chandra',
        designation: 'Content Engineer',
        details: 'A get-it-done policy individual running forward in life to learn and grow more. By the way,she binge watches shows, sings and looks for excellent buffet places around.',
        social: [
            {
                icon: 'Li',
                href: 'https://www.linkedin.com/in/ananya-chalakani-981842143/'
            }
        ]
    },
    {
        firstName: 'Rohith',
        lastName: 'Sampathi',
        designation: 'CEO & Founder',
        details: 'Rohith Sampathi is a management consultant, free-lance writer, business marketer and an automotive enthusiast. During his journey with market intelligence industry, he was extensively working on research modeling for animal nutrition, automotive and machinery industries. Further, having worked as the Marketing Lead for a market research firm in the highly competitive paid marketing arena, his expertise in marketing for a diverse user-base is notable.',
        social: [
            {
                icon: 'Li',
                href: 'https://www.linkedin.com/in/rohith-sampathi-053ba03b/'
            },
            {
                icon: 'Tw',
                href: 'https://twitter.com/Rohith_Sampathi'
            }
        ]
    },
    {
        firstName: 'D. Lakshmi Krishna',
        lastName: 'Bhushan',
        designation: 'Marketing Strategist',
        details: 'The master ofstrategy at Montaigne. Making the right moves-in chess and in marketing is what makes him the right fit for the role. Additionally, he eats a lot of chicken and loves drinking a bottle of Tang everyday.',
        social: [
            {
                icon: 'Li',
                href: 'https://www.linkedin.com/in/lakshmi-krishna-7034617a'
            },
            {
                icon: 'Tw',
                href: 'https://twitter.com/lakshmikrisna?s=09'
            }
        ]
    },
    {
        firstName: 'Nisha',
        lastName: 'Anand',
        designation: 'Talent Acquisition',
        details: 'The Maknae of Montaigne. 19, prudent and powerful enough to recruit the right talent for us. Moreover,keeping everybody in harmony and on par is her strength.',
        social: [
            {
                icon: 'Li',
                href: 'https://www.linkedin.com/in/nisha-anand-273260164/'
            }
        ]
    },
    {
        firstName: 'Ahmed',
        lastName: 'Aleemuddin',
        designation: 'Lead Developer',
        details: 'At Montaigne, a motivated Ahmed develops and manages designs and functionalities of websites and servers with his inner creativity and multitasking to create something out-of-the-box! The early bird,always sits on the bean bag,watches Mr.Bean and loves binging comedy shows.',
        social: [
            {
                icon: 'Li',
                href: 'https://www.linkedin.com/in/ahmed-aleemuddin-2b5392117'
            }
        ]
    },
    {
        firstName: 'Narendra',
        lastName: 'Kumawat',
        designation: 'Product Specialist',
        details: 'The tech savy geek who fits in perfectly despite being the calmest among the lot. Pro-active and focused, he strives to perform better and surpasses his own benchmarks.',
        social: [
            {
                icon: 'Github',
                href: 'https://github.com/narendra-kumawats'
            },
            {
                icon: 'Li',
                href: 'https://www.linkedin.com/in/narendra-kumawat-a1bb95100/'
            }
        ]
    },
    {
        firstName: 'Ratnasambhav',
        lastName: 'Priyadarshi',
        designation: 'Product Specialist',
        details: 'Innovates, creates and perfects every product that Montaigne comes across. A gamer after  work, a music person and reads books once a while.',
        social: [
            {
                icon: 'Github',
                href: 'https://github.com/Ratnasambhavs'
            },
            {
                icon: 'Li',
                href: 'https://www.linkedin.com/in/ratnasambhav-priyadarshi-496b77108/'
            },
            {
                icon: 'Tw',
                href: 'https://twitter.com/ratnasambhav732'
            }
        ]
    },
    {
        firstName: 'Vamsi',
        lastName: 'Konduri',
        designation: 'Creative Designer',
        details: 'A one-of-a-kind creative designer who makes eye-catching visuals of our ideas.He loves clicking and posing for photographs,is a foodie and competes with himself the most.',
        social: [
            {
                icon: 'Li',
                href: 'https://www.linkedin.com/in/vamsi-konduri-02b94815a/'
            },
            {
                icon: 'Tw',
                href: 'https://twitter.com/vamsikrissh'
            },
            {
                icon: 'Fb',
                href: 'https://www.facebook.com/krisshfans'
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
    let socialLinks = '';
    memberDetail.social.map(link => {
        socialLinks += `<a href='${link.href}'><div class='${link.icon}'></div></a>`
    });
    setTimeout(() => {
        $('.first-name').html(memberDetail.firstName);
        $('.last-name').html(memberDetail.lastName);
        $('.designation').html(memberDetail.designation);
        $('.details').html(memberDetail.details);
        $('.member-social').html(socialLinks);
        body.removeClass('fadeOutDown');
        body.addClass('fadeInDown');
    }, 500);
}
