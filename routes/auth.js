const express = require('express');
const Router = express.Router();
const Controller = require('../controllers/auth');

Router.post('/registration',Controller.registration);
Router.post('/login',Controller.login);


module.exports = Router;

