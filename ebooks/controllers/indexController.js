const db = require('../dataBase/models');
const products = require('../dataBase/models/products');

const indexController = {
    home: function(req, res, next) {
        db.products.findAll(
          {
            where: {id: 1}
          }
        )
        .then(res.render('home', {products}))
      },
    productDetail: function(req, res) {
        res.render("productDetail");
      },
    productCart: function(req, res, next) {
        res.render("productCart");
      },
    editar: function(req, res, next) {

      res.render('userEdit');
    }
}

module.exports = indexController
