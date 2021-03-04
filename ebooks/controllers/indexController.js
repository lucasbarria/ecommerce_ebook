const db = require('../dataBase/models');
const products = require('../dataBase/models/products');

const indexController = {
    home: function(req, res, next) {
        db.products.findAll()
        .then(function(products){
          return res.render('home', {products});
        })
      },
    productDetail: function(req, res) {
        db.products.findByPk(req.params.id)
                 .then(function(products){
                   return  res.render('productDetail', {products});
        })
    },
    productCart: function(req, res) {
        res.render("productCart");
      },
    editar: function(req, res, next) {
      res.render('userEdit');
    },
    search: function(req, res, next) {
      //que busque por todo no solo por nonmbre
      let value = req.query.textbox
      db.products.findAll({where: {name: value}})
      .then(function(product){
        return res.render('productDetail', {product});
      })
    }
}

module.exports = indexController
