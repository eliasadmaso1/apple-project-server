const express = require('express');
const Router = express.Router();
const Controller = require('../controllers/product');

Router.get('/', Controller.getAllProducts);
Router.post('/',Controller.addProduct);
Router.delete('/:id', Controller.deleteProduct);
Router.put('/:id', Controller.updateProduct);


module.exports = Router;