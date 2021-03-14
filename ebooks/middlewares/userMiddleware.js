const fs = require('fs');
const { user } = require('../controllers/apisController');
const db = require('../dataBase/models');

const userMiddleware = {
    userlogged: function(req, res, next) {
        if(req.session && req.session.user){
            /* res.locals.usuario = req.session.usuario; */
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
        // ver admin
        if(req.session && req.session.user){
            var id = req.session.user.id;
            db.users.findOne({where: {id: id}}).then(function(userFound){
                if(userFound.admin == '1'){
                        return next()
                }else {
                        res.send('error')
    }
            })
        }else{
            res.send('no estas logueado')
        }
       
    },
    validateEmail: function(req, res, next) {
        var email = req.body.email
        db.users.findOne({where: {email: email}}).then(function(userFound){
            console.log(userFound);
            if(userFound && userFound.email == email){
                return res.send('dos igaules')
            }else {
                next()
            }
        })
    },
    user: function(req, res, next) {
        if(req.session && req.session.user){
            next()
        }else {
            res.redirect('/users/login')
        }
    },
}

module.exports = userMiddleware;


