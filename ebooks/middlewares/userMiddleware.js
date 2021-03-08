const fs = require('fs');
const { user } = require('../controllers/apisController');
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
        var id = req.session.user.id
        db.users.findOne({where: {id: id}}).then(function(userFound){
            if(userFound && userFound.email == email){
                return res.send('dos iguales')
            }else {
                next()
            }
        })
    },
    validateEmail: function(req, res, next) {
        var email = req.body.email
        db.users.findOne({where: {email: email}}).then(function(userFound){
            if(userFound && userFound.email == email){
                return res.send('dos iguales')
            }else {
                next()
            }
        })
       
       
        /* var email = req.body.email
        let user = req.body
        db.users.findOne({where: {email: user.email}}).then(function(userFound){
                  
        }) */
    }
}

module.exports = userMiddleware;