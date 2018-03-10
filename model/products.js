
var mongoose = require('mongoose');

var products = mongoose.model('products',
    {
        "name": { type: String },
        "price": { type: String },
        "_category": [{ type: mongoose.Schema.Types.ObjectId, ref: 'categories' }]
    });

module.exports = products;

