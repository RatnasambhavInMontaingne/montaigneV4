/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

// Making a static map is really long - this is a handy helper function to make one
exports.staticMap = ([lng, lat]) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

// inserting an SVG
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);

// Some details about the site
exports.siteName = `Montaigne Smart Business Solutions`;

exports.menu = [
  { slug: '/stores', title: 'Stores', icon: 'store', },
  { slug: '/tags', title: 'Tags', icon: 'tag', },
  { slug: '/top', title: 'Top', icon: 'top', },
  { slug: '/add', title: 'Add', icon: 'add', },
  { slug: '/map', title: 'Map', icon: 'map', },
];


exports.sections = [
  {
    id: 'incubation',
    header: 'Incubation',
    p1: 'Lorem ipsum dolor sit amet, his id verterem volutpat, viderer oporteat cu his. Ea his quod dicta. Vix molestie electram id. Cu sed bonorum verterem sadipscing, ad novum timeam ceteros nam. Eius mediocritatem ne est, etiam nemore detraxit te per. Ne qui dicunt doctus scaevola, summo apeirian ius et.',
    p2: 'Ea debitis facilisis disputationi vim, id eam numquam dolorem appetere, qui duis tota labores ne. Qui persecuti rationibus sadipscing eu, odio dolores lobortis mel ut, ius te dicam aliquid deserunt. Mandamus omittantur quo cu, duo inani fabulas luptatum in, eum ut dicam urbanitas. Sit apeirian dissentias complectitur eu, ad ipsum ludus indoctum nec.'
  },
  {
    id: 'creative_designing',
    header: 'Creative Designing',
    p1: 'Lorem ipsum dolor sit amet, his id verterem volutpat, viderer oporteat cu his. Ea his quod dicta. Vix molestie electram id. Cu sed bonorum verterem sadipscing, ad novum timeam ceteros nam. Eius mediocritatem ne est, etiam nemore detraxit te per. Ne qui dicunt doctus scaevola, summo apeirian ius et.',
    p2: 'Ea debitis facilisis disputationi vim, id eam numquam dolorem appetere, qui duis tota labores ne. Qui persecuti rationibus sadipscing eu, odio dolores lobortis mel ut, ius te dicam aliquid deserunt. Mandamus omittantur quo cu, duo inani fabulas luptatum in, eum ut dicam urbanitas. Sit apeirian dissentias complectitur eu, ad ipsum ludus indoctum nec.'
  },
  {
    id: 'marketing',
    header: 'Marketing',
    p1: 'Lorem ipsum dolor sit amet, his id verterem volutpat, viderer oporteat cu his. Ea his quod dicta. Vix molestie electram id. Cu sed bonorum verterem sadipscing, ad novum timeam ceteros nam. Eius mediocritatem ne est, etiam nemore detraxit te per. Ne qui dicunt doctus scaevola, summo apeirian ius et.',
    p2: 'Ea debitis facilisis disputationi vim, id eam numquam dolorem appetere, qui duis tota labores ne. Qui persecuti rationibus sadipscing eu, odio dolores lobortis mel ut, ius te dicam aliquid deserunt. Mandamus omittantur quo cu, duo inani fabulas luptatum in, eum ut dicam urbanitas. Sit apeirian dissentias complectitur eu, ad ipsum ludus indoctum nec.'
  },
  {
    id: 'ui_ux',
    header: 'UI/UX',
    p1: 'Lorem ipsum dolor sit amet, his id verterem volutpat, viderer oporteat cu his. Ea his quod dicta. Vix molestie electram id. Cu sed bonorum verterem sadipscing, ad novum timeam ceteros nam. Eius mediocritatem ne est, etiam nemore detraxit te per. Ne qui dicunt doctus scaevola, summo apeirian ius et.',
    p2: 'Ea debitis facilisis disputationi vim, id eam numquam dolorem appetere, qui duis tota labores ne. Qui persecuti rationibus sadipscing eu, odio dolores lobortis mel ut, ius te dicam aliquid deserunt. Mandamus omittantur quo cu, duo inani fabulas luptatum in, eum ut dicam urbanitas. Sit apeirian dissentias complectitur eu, ad ipsum ludus indoctum nec.'
  },
  {
    id: 'predictive_analytics',
    header: 'Predictive Analytics',
    p1: 'Lorem ipsum dolor sit amet, his id verterem volutpat, viderer oporteat cu his. Ea his quod dicta. Vix molestie electram id. Cu sed bonorum verterem sadipscing, ad novum timeam ceteros nam. Eius mediocritatem ne est, etiam nemore detraxit te per. Ne qui dicunt doctus scaevola, summo apeirian ius et.',
    p2: 'Ea debitis facilisis disputationi vim, id eam numquam dolorem appetere, qui duis tota labores ne. Qui persecuti rationibus sadipscing eu, odio dolores lobortis mel ut, ius te dicam aliquid deserunt. Mandamus omittantur quo cu, duo inani fabulas luptatum in, eum ut dicam urbanitas. Sit apeirian dissentias complectitur eu, ad ipsum ludus indoctum nec.'
  }
]

exports.posts = [
  {
    image: 'https://source.unsplash.com/random',
    url: '#',
    title: 'Lorem Ipsum In The Wild'
  },
  {
    image: 'https://source.unsplash.com/random',
    url: '#',
    title: 'Lorem Ipsum Burning In The Sky'
  },
  {
    image: 'https://source.unsplash.com/random',
    url: '#',
    title: 'Lorem Ipsum Appears Everywhere'
  }
]

exports.teamMembers = [
  {
    name: 'Jhon Wick',
    designation: 'Developer',
    details: 'Lorem ipsum dolor sit amet, his id verterem volutpat, viderer oporteat cu his. Ea his quod dicta. Vix molestie electram id. Cu sed bonorum verterem sadipscing, ad novum timeam ceteros nam. Eius mediocritatem ne est, etiam nemore detraxit te per. Ne qui dicunt doctus scaevola, summo apeirian ius et.',
    image: 'https://source.unsplash.com/random'
  },
  {
    name: 'Jhon Wick',
    designation: 'Developer',
    details: 'Lorem ipsum dolor sit amet, his id verterem volutpat, viderer oporteat cu his. Ea his quod dicta. Vix molestie electram id. Cu sed bonorum verterem sadipscing, ad novum timeam ceteros nam. Eius mediocritatem ne est, etiam nemore detraxit te per. Ne qui dicunt doctus scaevola, summo apeirian ius et.',
    image: 'https://source.unsplash.com/random'
  },
  {
    name: 'Jhon Wick',
    designation: 'Developer',
    details: 'Lorem ipsum dolor sit amet, his id verterem volutpat, viderer oporteat cu his. Ea his quod dicta. Vix molestie electram id. Cu sed bonorum verterem sadipscing, ad novum timeam ceteros nam. Eius mediocritatem ne est, etiam nemore detraxit te per. Ne qui dicunt doctus scaevola, summo apeirian ius et.',
    image: 'https://source.unsplash.com/random'
  },
  {
    name: 'Jhon Wick',
    designation: 'Developer',
    details: 'Lorem ipsum dolor sit amet, his id verterem volutpat, viderer oporteat cu his. Ea his quod dicta. Vix molestie electram id. Cu sed bonorum verterem sadipscing, ad novum timeam ceteros nam. Eius mediocritatem ne est, etiam nemore detraxit te per. Ne qui dicunt doctus scaevola, summo apeirian ius et.',
    image: 'https://source.unsplash.com/random'
  },
  {
    name: 'Jhon Wick',
    designation: 'Developer',
    details: 'Lorem ipsum dolor sit amet, his id verterem volutpat, viderer oporteat cu his. Ea his quod dicta. Vix molestie electram id. Cu sed bonorum verterem sadipscing, ad novum timeam ceteros nam. Eius mediocritatem ne est, etiam nemore detraxit te per. Ne qui dicunt doctus scaevola, summo apeirian ius et.',
    image: 'https://source.unsplash.com/random'
  },
  {
    name: 'Jhon Wick',
    designation: 'Developer',
    details: 'Lorem ipsum dolor sit amet, his id verterem volutpat, viderer oporteat cu his. Ea his quod dicta. Vix molestie electram id. Cu sed bonorum verterem sadipscing, ad novum timeam ceteros nam. Eius mediocritatem ne est, etiam nemore detraxit te per. Ne qui dicunt doctus scaevola, summo apeirian ius et.',
    image: 'https://source.unsplash.com/random'
  },
  {
    name: 'Jhon Wick',
    designation: 'Developer',
    details: 'Lorem ipsum dolor sit amet, his id verterem volutpat, viderer oporteat cu his. Ea his quod dicta. Vix molestie electram id. Cu sed bonorum verterem sadipscing, ad novum timeam ceteros nam. Eius mediocritatem ne est, etiam nemore detraxit te per. Ne qui dicunt doctus scaevola, summo apeirian ius et.',
    image: 'https://source.unsplash.com/random'
  },
  {
    name: 'Jhon Wick',
    designation: 'Developer',
    details: 'Lorem ipsum dolor sit amet, his id verterem volutpat, viderer oporteat cu his. Ea his quod dicta. Vix molestie electram id. Cu sed bonorum verterem sadipscing, ad novum timeam ceteros nam. Eius mediocritatem ne est, etiam nemore detraxit te per. Ne qui dicunt doctus scaevola, summo apeirian ius et.',
    image: 'https://source.unsplash.com/random'
  }
]
