const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const validator = require('validator');
const multer = require('multer');
const Applicants = mongoose.model('Applicants');

const storage = multer.diskStorage({
  destination: './public/uploads/resume',
  filename: function (req, file, next) {
    const fileName = Date.now() + ' - ' + file.originalname;
    next(null, fileName);
  }
});

function fileFilter (req, file, next) {
  const mime = file.mimetype;
  if(mime == 'application/msword' || mime == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || mime == 'image/jpeg' || mime == 'image/png' || mime == 'image/gif' || mime == 'application/pdf') {
    console.log('Valid file');
    next(null, true);
  } else {
    console.log('Invalid file');
    next({
      message: 'That filetype isn\'t allowed!'
    }, false);
  }
}

const multerOptions = { storage, fileFilter };

exports.uploadResume = multer(multerOptions).single('resume');

exports.apply = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      number: req.body.number,
      email: req.body.email,
      interest: req.body.interest,
      resumePath: req.file.path
    }
    const response = await (new Applicants(data)).save();
    res.json({ message: 'Thank you for applying!' });
  } catch (error) {
    res.json(error);
  }
}