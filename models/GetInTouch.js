const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');
const validator = require('validator')
const dompurify = require('dompurify')

const validateContactNumber = number => validator.isMobilePhone(number, 'any')

getInTouchSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter your name'
  },
  number: {
    type: String,
    trim: true,
    required: 'Please enter your contact number',
    validate: [validateContactNumber, 'Please fill a valid phone number']
  },
  organisation: {
    type: 'String',
    trim: true,
    required: 'Please entery your organinsation name'
  },
  email: {
    type: String,
    trim: true,
    required: 'Please enter your email',
    validate: [validator.isEmail, 'Please fill a valid email address']
  },
  subject: {
    type: String,
    trim: true,
    required: 'Please select one of the options'
  },
  message: {
    type: String,
    trim: true,
    required: false
  }
});

// getInTouchSchema.pre('save', function(next) {
//   this.name = dompurify.sanitize(this.name);
//   this.contactNumber = dompurify.sanitize(this.contactNumber);
//   this.organisation = dompurify.sanitize(this.organisation);
//   this.email = dompurify.sanitize(this.email);
//   this.subject = dompurify.sanitize(this.subject);
//   this.message = dompurify.sanitize(this.message);
//   next();
// })

module.exports = mongoose.model('GetInTouch', getInTouchSchema);