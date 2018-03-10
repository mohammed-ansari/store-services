var transaction = require('../data/transaction-utils');
var query = require('../data/query-utils');

module.exports.saveCategory = function (req, res) {

    var category = req.body;

    if (!category) {
        res.json({
            status: false,
            message: 'category details required!'
        });
    } else {
        transaction.saveCategory(category, function (err, result) {
            if (err) {
                res.json({
                    status: false,
                    message: 'error occurred while saving category'
                });
            } else {
                res.json({
                    status: 200,
                    data: result,
                    message: 'category saved!'
                });
            }
        });
    }

}

module.exports.getAllCategories = function(req,res){

        query.getAllCategories(function (err, result) {
            if (err) {
                res.json({
                    status: false,
                    message: 'error occurred while getting all categories'
                });
            } else {
                res.json({
                    status: 200,
                    data: result,
                    message: 'all categories found!'
                });
            }
        });
    
}