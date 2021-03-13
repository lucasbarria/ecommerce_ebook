const db = require('../dataBase/models');
const cart = require('../dataBase/models/cart');

const cartController = {
    create: function(req, res){
        res.render('productCart')
    },
    store: function(req, res){
        let userLogged = req.session.userLogged;

        let cartLogged = db.cart.findOne({
            where:{
                user_id: userLogged.id,
                state: "abierto"
            }
        })

        db.cart_product.create({
            where:{
                id_product: req.body.id_product,
                id_cart: cartLogged.id
            }
        })
    },
    edit: function (req, res){
        db.cart.findByPk(req.params.id)
        .then(function(cart){
            res.render('productCart', {cart: cart});
        })
    },
    update: function(req, res){
        let userLogged = req.session.userLogged;

        let cartLogged = db.cart.findOne({
            where:{
                user_id: userLogged.id,
                state: "abierto"
            }
        })
    },
    deleteProduct: function(req,res){
        db.cart_product.destroy({
            where:{
                id: req.params.id
            }
        })
    },
    deleteCart: function(req,res){
        db.cart_product.destroy({
            where: {
                id_cart: cartLogged.id
            }
        })
        
        for(let i = 0; i < req.body.qty; i++){
            db.cart_product.create({
                id_product: req.body.id_product[i],
                id_cart: cartLogged.id,
                qty: req.body.qty[i]
            })
        }
    }    
};

module.exports = cartController;