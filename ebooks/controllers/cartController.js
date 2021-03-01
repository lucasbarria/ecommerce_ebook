const db = require('../dataBase/models');
const cart = require('../dataBase/models/cart');

const cartController = {
    create: function(req, res){
        res.render('cart')
    },
    store: function(req, res){
        let userLogged = req.session.userLogged;

        let cartLogged = db.Cart.findOne({
            where:{
                user_id: userLogged.id,
                state: "abierto"
            }
        })

        db.Cart_product.create({
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

        let cartLogged = db.Cart.findOne({
            where:{
                user_id: userLogged.id,
                state: "abierto"
            }
        })
    },
    deleteProduct: function(req,res){
        db.Cart_product.destroy({
            where:{
                id: req.params.id
            }
        })
    },
    deleteCart: function(req,res){
        db.Cart_product.destroy({
            where: {
                cart_id: cartLogged.id
            }
        })
        
        for(let i = 0; i < req.body.qty; i++){
            db.Cart_product.create({
                product_id: req.body.product_id[i],
                cart_id: cartLogged.id,
                qty: req.body.qty[i]
            })
        }
    }    
};

module.exports = cartController;