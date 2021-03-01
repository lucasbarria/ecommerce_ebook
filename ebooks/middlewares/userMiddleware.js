const fs = require('fs');
let usersList = [];
const db = require('../dataBase/models');

const userMiddleware = {
    userlogged: function(req, res, next) {
        if(req.session && req.session.user){
            /*res.locals.usuario = req.session.usuario;*/
            res.send('error')
        }else {
            next()
        }
    },
    validatedUser: function(req, res, next) {
        if(req.session && req.session.user){
            res.locals.user = req.session.user;
        }
        next();
    },
    admin: function(req,res ,next){
       if(db.users.admin == 1){
           console.log('llego'); 
       }
       next()
    }
}

module.exports = userMiddleware;