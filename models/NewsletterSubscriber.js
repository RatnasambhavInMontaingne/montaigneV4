const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const validator = require('validator')

newsletterSubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: 'Please enter your email',
    validate: [validator.isEmail, 'Please fill a valid email address']
  }
});

module.exports = mongoose.model('NewsletterSubscriber', newsletterSubscriberSchema);