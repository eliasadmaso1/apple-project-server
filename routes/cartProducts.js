const express = require('express');
const Router = express.Router();
const Controller = require('../controllers/cartProducts');
const { verifyUser } = require('../middlewares/verifyToken');

Router.get('/:userId', Controller.getProductsInCart);
Router.post('/add', Controller.addProductToCart);
Router.delete('/remove', Controller.removeCartProduct);
Router.delete('/decrement', Controller.decrementCartProduct);




module.exports = Router;