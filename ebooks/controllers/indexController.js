const fs = require('fs');
var registro = fs.readFileSync("./database/users.json");
registro = JSON.parse(registro);
const indexController = {
    home: function(req, res, next) {
        res.render('home');
      },
    productDetail: function(req, res, next) {
        res.render("productDetail");
      },
    register: function(req, res, next) {
        res.render("register");
      },
      store: function (req, res) {
        let registrado = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.pass,
            date: req.body.date,
            usuario: req.body.usuario
        }
<<<<<<< HEAD
        let nuevoId = registrado.length > 0 ? registrado[registrado.length - 1].id + 1 : 1; 
        registrado.id = nuevoId;

        registro.push(registrado);
        let registroJSON = JSON.stringify(registro,null,2);
        fs.writeFileSync("./database/registro.json", registroJSON);
        res.redirect('/')
    },
    editar: function(req, res, next) {
      
=======

        /*
        let nuevoId = registro.length > 0 ? registro[registro.length - 1].id + 1 : 1; 
        registro.id = nuevoId;
        */

        registro.push(registrado);
        let registroJSON = JSON.stringify(registro,null,2);
        fs.writeFileSync("./database/users.json", registroJSON);
        res.redirect('/index/register ')
>>>>>>> 948c91a571c6ef7cbe8c2860d36a06d37d00635a
    },
    iniciasesion: function(req, res, next) {
        res.render("iniciasesion");
      },
    productCart: function(req, res, next) {
        res.render("productCart");
      },
}

module.exports = indexController
