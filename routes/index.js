const express = require('express');
const router = express.Router();
const getInTouchController = require('../controllers/getInTouchController')

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

router.post('/get_in_touch', getInTouchController.addToDB);

router.get('/blog', (req, res) => {
  res.render('blog', {title: 'Blog'});
})

module.exports = router;
