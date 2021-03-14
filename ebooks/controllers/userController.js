let { check, validationResult, body} = require('express-validator');
const db = require('../dataBase/models');


const userController = {
    login: function(req, res, next) {
        res.render("login");
      },
    loggedin: function(req, res, next){
        db.users.findOne({where:
            {email: req.body.email},
            include: db.cart
        })
        .then(function(user){
                if(user && user.password == req.body.password){
                let cart = userFound.carts.find(cart => cart.status == true)
                if (cart) {
                    userFound = {
                        name: user.name,
                        id: user.id,
                        id_cart: cart.id
                    }
                    return res.redirect('/')
                }else{
                db.cart.create({
                    status: 1,
                    id_user: user.id
                }).then(cart => {
                    userFound = {
                        name: user.name,
                        id: user.id,
                        id_cart: cart.id
                    }
                    return res.redirect('/')
                })
        }
        }else{
                return res.send('El usuario y/o contraseña son incorrectos...')
        }
    })
    },
    logout: function(req, res, next){
        if(req.session){
            req.session.destroy();
        }
        res.redirect('/');
    },
    create: function (req, res){
        res.render('register')
    },
    store: function (req, res){
        //revisar admin y email
            db.users.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.pass,
                date: req.body.date,
                genre: req.body.genre,
                admin: 0
            }).then(function (user){
                if(user){
                    req.session.user = {id: user.id, name: user.name, admin: user.admin}
                }
                res.redirect('/')
            });
    },
    edit: function (req, res){
       db.users.findByPk(req.params.id).then(function(userFound){
           if (userFound){
               console.log(userFound);
               return res.render('userEdit', {userFound});
            }else {
                return res.send("Usuario Invalido");
            }
       });
    },
    update: function (req, res){

        db.users.update({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        date: req.body.date,
        genre: req.body.genre 
        },
        {
            where: {id: req.params.id}
        });
        res.redirect('/profile/' + req.params.id)
    },
    delete: function (req, res){
        db.users.destroy({
            where: {id: req.params.id}
            .then(function(users) {
                res.render('home');
            })
        })

    },
    userProfile: function(req, res, next) {
        db.users.findByPk(req.params.id)
        .then(function(user) {
            return res.render('profile', {user})
        })
    }
}




module.exports = userController;