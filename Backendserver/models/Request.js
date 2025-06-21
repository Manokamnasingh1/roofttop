const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  query: String,
});

module.exports = mongoose.model('Request', RequestSchema);