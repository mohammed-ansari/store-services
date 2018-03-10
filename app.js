var express = require('express');

var db = require('./settings/db-config');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var categoriesController = require('./controllers/categories-controller');
var productsController = require('./controllers/products-controller');

/**
 * save category
 */
app.post('/api/category',categoriesController.saveCategory);

/**
 * save product
 */
app.post('/api/product',productsController.saveProduct);

/**
 * get all categories
 */
app.get('/api/category',categoriesController.getAllCategories);

/**
 * get all products by categoryId
 */
app.get('/api/product/:categoryId',productsController.getAllProductsByCategory);

/**
 * update product name and price by id
 */
app.patch('/api/product/:productId',productsController.updateProductNameAndPriceById);

app.listen(8080);