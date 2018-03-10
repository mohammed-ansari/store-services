var categories = require('../model/categories');

var products = require('../model/products');

/**
 * Add category
 * @param {*} categoryDetails 
 * @param {*} callback 
 */
module.exports.saveCategory = function (categoryDetails, callback) {

    categories.create(categoryDetails, function (err, result) {
        callback(err, result);
    });
}

/**
 * Add product
 * @param {*} productDetails 
 * @param {*} callback 
 */
module.exports.saveProduct = function (productDetails, callback) {

    products.create(productDetails, function (err, result) {
        callback(err, result);
    });
}

/**
 * update product name and price by id
 * @param {*} productId 
 * @param {*} productName 
 * @param {*} productPrice 
 * @param {*} callback 
 */
module.exports.updateProductNameAndPriceById = function (productId, productName, productPrice, callback) {

    products.findByIdAndUpdate(productId, { $set: { name: productName, price: productPrice } }, { new: true }, function (err, result) {
        callback(err, result);
    });
}