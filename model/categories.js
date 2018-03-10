var mongoose = require('mongoose');

var categories = mongoose.model('categories', {
    "name": {type: String},
    "storage": {type: Array},
    "color":{type: Array}
  });

  module.exports = categories;

