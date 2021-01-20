const fs = require('fs');
let usersList = [];

const userMiddleware = {
    usuarioLogueado: function(req, res, next) {
        if(req.session && req.session.usuario){
            /*res.locals.usuario = req.session.usuario;*/
            res.send('no funciono')
        }else {
            next()
        }
    },
    validarUsuario: function(req, res, next) {
        if(req.session && req.session.usuario){
            res.locals.usuario = req.session.usuario;
        }
        next();
    },
}

module.exports = userMiddleware;