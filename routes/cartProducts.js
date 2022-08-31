const express = require('express');
const Router = express.Router();
const Controller = require('../controllers/cartProducts');
const { verifyUser } = require('../middlewares/verifyToken');

Router.get('/:userId',verifyUser, Controller.getProductsInCart);
Router.post('/add',verifyUser, Controller.addProductToCart);
Router.delete('/remove',verifyUser, Controller.removeCartProduct);
Router.delete('/decrement',verifyUser, Controller.decrementCartProduct);




module.exports = Router;