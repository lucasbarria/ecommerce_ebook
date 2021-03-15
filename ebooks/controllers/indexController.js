const { Sequelize } = require('../dataBase/models');
const db = require('../dataBase/models');
const cart = require('../dataBase/models/cart');
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
      console.log(req.session.user)
      db.cart.findAll({
        where: {
          id: req.session.user.carts[0].id
        }
      }).then(function(response){
        db.products.findAll({
          include: [{
              association: 'carts',
              where: {
                  id_user: req.session.user.id,
              }
          }]
      })
      .then(function(userCart) {

          res.render('productCart', {userCart})

      })
      })
     /*  db.cart.findOne({where:
        {
            id: req.session.user.carts[0].id
        },
        include: db.products
      })
      .then(function(cart){
        return  res.render("productCart", {cart});
      }); */
    },
    addToCart: function(req, res) {
      let idCart = req.session.user.carts[0].id
      db.product_cart.create({
        id_cart: idCart,
        id_product: req.params.id
      }).then(function(cart){
        return res.render('productCart', {cart})
      }).catch(function(error){
        return res.send(error)
      })
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
        console.log(product)
        if (product){
          return res.render('productList', {product});
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
