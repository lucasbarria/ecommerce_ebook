const fs = require('fs');
let usersList = [];
let { check, validationResult, body} = require('express-validator');
const db = require('../dataBase/models');


const userController = {
    iniciasesion: function(req, res, next) {
        res.render("iniciasesion");
      },
    sesioniniciada: function(req, res, next){
        let usuario = req.body;
        db.users.findOne({where: {email: usuario.email}}).then(function(userFound){
            if(userFound.password == usuario.pass){
                req.session.usuario = {id: userFound.id, nombre: userFound.nombre};
                res.redirect("/");
            }else{
                res.send('error')
            }
        })
    },
    create: function (req, res){
        res.render('register')
    },
    store: function (req, res){
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.users.create({
                nombre: req.body.name,
                email: req.body.email,
                password: req.body.pass,
                fecha: req.body.date,
                genero: req.body.genero
            }).then(function (user){
                res.render('home')
            });
        } else {
            console.log(errors.mapped());
            res.render('register', {errors: errors.errors});
        }



        /*if(errors.isEmpty()) {

            let nuevoId = usersList.length > 0 ? usersList[usersList.length - 1].id + 1 : 1;
            let users = {
            // id: req.body.id,
            id: nuevoId,
            nombre: req.body.name,
            email: req.body.email,
            pass: req.body.pass,
            date: req.body.date,
            Usuario: req.body.usuario
            }
            usersList.push(users);
            
        } else {
            res.render('register', {errors: errors.errors});
        }*/
    },
    edit: function (req, res){
       db.users.findByPk(req.params.id).then(function(userFound){
           if (userFound){
               console.log(userFound);
               return res.render('editarusuario', {userFound});
            }else {
                return res.send("Usuario Invalido");
            }
       });
    },
    update: function (req, res){
        let id = req.params.id;
        let editUser = req.body;
        let usersListEdit = usersList.map(function(userFound){
            if (userFound.id == id){
                userFound = {
                    id: req.params.id,
                    ...editUser
                }
            }
            return userFound;
        });
        
        return res.redirect('/');
    },
    delete: function (req, res){
        let id = req.params.id;
        let userFound;
        for(let i=0; i<usersList.length; i++){
            if (usersList[i].id == id){
                userFound = usersList[i];
                break;
            }
        }
        if (userFound){
            let deleteUser = usersList.filter(function(userFound){
                return userFound.id != id;
            });
            deleteUserJSON = JSON.stringify(deleteUser);
            
            res.send("Usuario Eliminado");
        }else {
            res.send("Usuario No Encontrado");
        }
    },
    perfilusuario: function(req, res, next) {
        res.render('perfil');
    }
}


module.exports = userController;