const express = require('express');
const Router = express.Router();
const Controller = require('../controllers/users');
const {verifyAdmin, verifyUser, verifyToken} = require('../middlewares/verifyToken');

Router.get('/', Controller.getUsers);


// Router.get('/check',verifyToken,(req,res,next)=>{
//     res.send('hello user you are auth')
// });

// Router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
//     res.send('hello user you are auth, can delete your account')
// });

Router.put('/:id', Controller.updateUser);
Router.delete('/:id', Controller.deleteUser);


module.exports = Router;