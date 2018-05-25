const mongoose = require('mongoose');
const GetInTouch = mongoose.model('GetInTouch');

exports.addToDB = async (req, res) => {
  const getInTouch = await (new GetInTouch(req.body)).save();
  console.log(getInTouch);
  res.redirect('/get_in_touch');
}
