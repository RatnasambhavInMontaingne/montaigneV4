const mongoose = require('mongoose');
const NewsletterSubscriber = mongoose.model('NewsletterSubscriber');

exports.subscribe = async (req, res) => {
  try {
    const response = await (new NewsletterSubscriber(req.body)).save();
    console.log(response);
    res.json({
      message: 'Thank you for subscribing!'
    });
  } catch (error) {
    res.json({error});
  }
}
