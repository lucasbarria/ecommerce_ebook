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
    store: function (req, res, next) {
        let registrado = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.pass,
            date: req.body.date,
            usuario: req.body.usuario
        }

        
        let nuevoId = registro.length > 0 ? registro[registro.length - 1].id + 1 : 1; 
        registro.id = nuevoId;
        
       
        /*
          var today = new Date();
          var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          var dateTime = date+' '+time;
        */
        registro.push(registrado, nuevoId);
        let registroJSON = JSON.stringify(registro,null,2);
        fs.writeFileSync("./database/users.json", registroJSON);
        res.redirect('/');
    },
    iniciasesion: function(req, res, next) {
        res.render("iniciasesion");
      },
    productCart: function(req, res, next) {
        res.render("productCart");
      },
    editar: function(req, res, next) {

      res.render('editarusuario');
    }
}

module.exports = indexController
