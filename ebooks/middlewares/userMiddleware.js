const fs = require('fs');
let usersList = [];

const userMiddleware = {
    userlogged: function(req, res, next) {
        if(req.session && req.session.user){
            /*res.locals.usuario = req.session.usuario;*/
            res.send('no funciono')
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
}

module.exports = userMiddleware;