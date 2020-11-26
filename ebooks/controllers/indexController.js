const fs = require('fs');
var registro = fs.readFileSync("./database/registro.json");
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
        let nuevoId = registrado.length > 0 ? registrado[registrado.length - 1].id + 1 : 1; 
        registrado.id = nuevoId;

        registro.push(registrado);
        let registroJSON = JSON.stringify(registro,null,2);
        fs.writeFileSync("./database/registro.json", registroJSON);
        res.redirect('/')
    },
    editar: function(req, res, next) {
      
    },
    iniciasesion: function(req, res, next) {
        res.render("iniciasesion");
      },
    productCart: function(req, res, next) {
        res.render("productCart");
      },
}

module.exports = indexController
