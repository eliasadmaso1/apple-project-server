const express = require('express');
const Router = express.Router();
const Controller = require('../controllers/users');
const {verifyAdmin, verifyUser, verifyToken} = require('../middlewares/verifyToken');

Router.get('/', Controller.getUsers);
Router.put('/:id', Controller.updateUser);
Router.delete('/:id', Controller.deleteUser);


module.exports = Router;