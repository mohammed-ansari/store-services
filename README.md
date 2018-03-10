# store-services
sample node services for products and categories

# To setup node js, please refer below url:
https://nodejs.org/en/

# To setup mongo db locally, please refer the below url:
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
Keep default settings to connect mongo db.

# To setup project, run the below commands sequentially in project directory:
1. npm install
2. npm start

# Description of services created are as follows:
base_url --> http://localhost:8080/

1. service url: /api/category
   http verb: POST
   description: add a category
   request-json: addCategory.json
   
2. service url: /api/product
   http-verb: POST
   description: add a product
   request-json: addProduct.json
   
3. service url: /api/category
   http-verb: GET
   description: get all categories
   
4. service url: /api/product/:categoryId
   http-verb: GET
   description: get all products by categoryId
   
5. service url: /api/product/:productId
   http-verb: PATCH
   description: update product name and price by id
   request-json: updateProductById.json
   

Note: Please find the sample request json files in project directory


