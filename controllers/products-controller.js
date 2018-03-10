var transaction = require('../data/transaction-utils');
var query = require('../data/query-utils');

module.exports.saveProduct = function (req, res) {

    var product = req.body;

    if (!product) {
        res.json({
            status: false,
            message: 'product details required!'
        });
    } else {
        transaction.saveProduct(product, function (err, result) {
            if (err) {
                res.json({
                    status: false,
                    message: 'error occurred while saving product'
                });
            } else {
                res.json({
                    status: 200,
                    data: result,
                    message: 'product saved!'
                });
            }
        });
    }

}

module.exports.getAllProductsByCategory = function (req, res) {

    var categoryId = req.params.categoryId;

    if (!categoryId) {
        res.json({
            status: false,
            message: 'category id required!'
        });
    } else {
        query.getAllProductsByCategory(categoryId, function (err, result) {
            if (err) {
                res.json({
                    status: false,
                    message: 'error occurred while getting all products by category'
                });
            } else {
                res.json({
                    status: 200,
                    data: result,
                    message: 'all products found by category!'
                });
            }
        });
    }

}

module.exports.updateProductNameAndPriceById = function (req, res) {

    var productId = req.params.productId, productName=req.body.name, productPrice= req.body.price;

    if (!productId) {
        res.json({
            status: false,
            message: 'product details required!'
        });
    } else {
        transaction.updateProductNameAndPriceById(productId, productName, productPrice, function (err, result) {
            if (err) {
                res.json({
                    status: false,
                    message: 'error occurred while updating product'
                });
            } else {
                res.json({
                    status: 200,
                    data: result,
                    message: 'product name and price updated!'
                });
            }
        });
    }

}