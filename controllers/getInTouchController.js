const mongoose = require('mongoose');
const GetInTouch = mongoose.model('GetInTouch');

exports.addToDB = async (req, res) => {
  try {
    const response = await (new GetInTouch(req.body)).save();
    res.json({
      message: 'Thank you. We will contact you soon!'
    });
  } catch (error) {
    res.json({error});
  }
}
