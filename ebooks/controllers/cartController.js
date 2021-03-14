const db = require('../dataBase/models');
const cart = require('../dataBase/models/cart');

const cartController = {
    create: function(req, res){
        res.render('cart')
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
                product_id: req.body.product_id,
                cart_id: cartLogged.id
            }
        })
    },
    edit: function (req, res){
        db.cart.findByPk(req.params.id)
        .then(function(cart){
            res.render('cart', {cart: cart});
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
                cart_id: cartLogged.id
            }
        })
        
        for(let i = 0; i < req.body.quantity; i++){ 
            db.cartProduct.create({
                id_cart: req.body.id_cart[i],
                price: req.body.price[i],
                id_product: req.body.product_id[i],
                cart_id: cartLogged.id,
                quantity: req.body.quantity[i]
            })
        }
    }    
};

module.exports = cartController;