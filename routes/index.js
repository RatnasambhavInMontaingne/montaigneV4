const express = require('express');
const router = express.Router();
const getInTouchController = require('../controllers/getInTouchController')
const newsletterSubscriberController = require('../controllers/newsletterSubscriberController')
const applicantController = require('../controllers/applicantController')

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Welcome',
    description: 'Montaigne smart business solutions is a startup India recognized, Hyderabad based startup which offers smart solutions to eliminate complications during any stage of business growth. Montaigne can incubate various kinds of business with their diverse knowledge of strategies and ideas to get your position to top among your competitors.',
    keywords: 'Business, Strategy, Incubator, Business growth, Business solutions, Smart business solutions, Data analysis, Predictive analytics'
  });
});

router.get('/skillset', (req, res) => {
  res.render('skillset', {
    title: 'Skillset',
    description: 'Montaigne is well known for their multiple skillsets as they deal with diverse platforms to provide accurate results to your business. We can incubate your business with our unique products like predictive analytics tool along with creative designing team we can deliver outstanding results.',
    keywords: 'Incubation, Incubator, Business Incubator, Business incubation, Business optimization, Creative designing, Product marketing'
  });
});

router.get('/get_in_touch', (req, res) => {
  res.render('get_in_touch', {
    title: 'Get In Touch',
    description: 'Contact us to get stand alone business plans and strategies to boost your business to higher level. Talk to our experts to customize your requirements and to get optimal solutions.',
    keywords: 'Contact Montaigne, Montaigne support, Montaigne Smart Business Solutions, Product development, Startup development'
  });
});

router.get('/our_story', (req, res) => {
  res.render('our_story', {
    title: 'Our Story',
    description: 'Our team are exceptional problem solvers who are trained and exposed to multiple complex situations where achieving top rank is their only motto. Our team can workout better solution to optimize your business at higher standards.',
    keywords: 'Marketing strategist, Product engineer, Marketing team, Business optimization, Business strategies'
  });
});

router.get('/blog', (req, res) => {
  res.render('blog', {
    title: 'Blog',
    description: 'Stay updated with our latest insights and strategies for different industries. Find relevant business plans and strategies for your industry to get optimal solutions. Subscribe to our newsletters for daily updates.',
    keywords: 'Latest market trends, Recent market insights, Business reports, business plans, Business strategy, Business development plan, Business development, Business insights, Business Updates'
  });
});

router.get('/working_with_us', (req, res) => {
  res.render('working_with_us', {
    title: 'Working With Us',
    description: 'Any one who are complex enough to understand and broad enough to learn new things to deliver acclaimed results are grandly welcome to be part of us. Long term internships are provided with various new learnings at work.',
    keywords: 'Join us, Marketing jobs, Data analysis jobs, Web development job, Internships at Hyderabad, Internships in Hyderabad, Internships, UI/UX jobs, Startup internships, Startup jobs'
  });
});

router.post('/get_in_touch', getInTouchController.addToDB);

router.post('/newsletter/subscribe', newsletterSubscriberController.subscribe);

router.post('/working_with_us', applicantController.uploadResume, applicantController.apply);

module.exports = router;
