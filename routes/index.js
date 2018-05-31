const express = require('express');
const router = express.Router();
const getInTouchController = require('../controllers/getInTouchController')
const newsletterSubscriberController = require('../controllers/newsletterSubscriberController')

router.get('/', (req, res) => {
  res.render('index', {title: 'Welcome'});
});

router.get('/skillset', (req, res) => {
  res.render('skillset', {title: 'Skillset'});
});

router.get('/get_in_touch', (req, res) => {
  res.render('get_in_touch', {title: 'Get In Touch'});
});

router.get('/our_story', (req, res) => {
  res.render('our_story', {title: 'Our Story'});
});

router.get('/blog', (req, res) => {
  res.render('blog', {title: 'Blog'});
})

router.get('/working_with_us', (req, res) => {
  res.render('working_with_us', {title: 'Working With Us'});
})

router.post('/get_in_touch', getInTouchController.addToDB);

router.post('/newsletter/subscribe', newsletterSubscriberController.subscribe);

module.exports = router;
