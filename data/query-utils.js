var categories = require('../model/categories');
var products = require('../model/products');

/**
 * fetch all categories
 * @param {*} callback 
 */
module.exports.getAllCategories = function (callback) {

    categories.find({}, function (err, result) {
        callback(err, result);
    });
}

/**
 * get all products by categoryId
 * @param {*} categoryId 
 * @param {*} callback 
 */
module.exports.getAllProductsByCategory = function (categoryId,callback) {

    products.find({_category:categoryId}, function (err, result) {
        callback(err, result);
    });
}