const { Sequelize } = require('../dataBase/models');
const db = require('../dataBase/models');
const products = require('../dataBase/models/products');
const Op = Sequelize.Op;

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
      db.products.findByPk(req.params.id)
                 .then(function(products){
                   return  res.render("productCart", {products: products});
                 });
    },
    editar: function(req, res, next) {
      res.render('userEdit');
    },
    search: function(req, res, next) {
      let value = req.query.textbox
      db.products.findAll({where: 
        { [db.Sequelize.Op.or]: {
          name: {[db.Sequelize.Op.like]: "%"+ value +'%' },
          editorial: {[db.Sequelize.Op.like]: "%"+ value +'%' },
          category: {[db.Sequelize.Op.like]: "%"+ value +'%' }
      }
    }})
      .then(function(product){
        if (product){
          let productList = [];
          productList.push(product)
          console.log(productList)
          return res.render('productList', {productList});
        } else {
          return res.send('Libro no encontrado');
        }
      })
    },
    purchaseComplete: function(req, res){
      res.render('purchaseCompleted');
    }
}

module.exports = indexController
