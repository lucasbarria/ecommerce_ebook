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
      db.cart.findOne({where:
        {
            id: req.session.user.id_cart
        },
        include: db.products
      })
      .then(function(cart){
        return  res.render("productCart", {cart});
      });
    },
    addToCart: function(req, res) {
      const product_id = req.params.id;
        db.cart.findByPk(req.session.user.id_cart, {include: db.products})
        .then(cart => {
            let prod = cart.products.find(p => p.id == product_id)
            if(prod){
                db.product_cart.findOne({where:{id_product: product_id, id_cart: req.session.user.id_cart}})
                .then(product => {
                    db.product_cart.update({
                        cant: product.cant + 2
                    },
                    {
                        where:{
                            id_cart: req.session.user.id_cart,
                            id_product: product_id
                        }
                    }).then(() =>{
                        return res.redirect('/')
                    })

                })
            }else{
                cart.addProduct(product_id, { through: {cant: 1}})
                .then(() =>{
                    return res.redirect('/')
                })
            }
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
