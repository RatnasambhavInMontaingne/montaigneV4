const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const validator = require('validator');

const validateContactNumber = number => validator.isMobilePhone(number, 'any');

applicantsSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter your name'
  },
  resume: {
    type: String
  }
  number: {
    type: String,
    trim: true,
    required: 'Please enter your contact number',
    validate: [validateContactNumber, 'Please fill a valid phone number']
  },
  email: {
    type: String,
    trim: true,
    required: 'Please enter your email',
    validate: [validator.isEmail, 'Please fill a valid email address']
  },
  interest: {
    type: String,
    trim: true,
    required: 'Please enter your interest'
  },
});

module.exports = mongoose.model('Applicants', applicantsSchema);