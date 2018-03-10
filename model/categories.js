var mongoose = require('mongoose');

var categories = mongoose.model('categories', {
    "name": {type: String},
    "storage": {type: Array},
    "color":{type: Array},
    "_product":[{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }]
  });

  module.exports = categories;

