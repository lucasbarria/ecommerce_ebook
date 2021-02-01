const db = require('../dataBase/models');
const products = require('../dataBase/models/products');
const users= require('../dataBase/models/users');

const apiController = {
    user: function(req, res, next) {
        db.users.findAll({users: users.id})
        .then(function(data){
            console.log(data)
            return data.json();
        })
        .then(function(users){
            console.log(users)
        })
        .catch(function(error){
            console.log(error)
        });

    },
    products: function(req, res){
    },
    sales: function(req, res){
    }
};

module.exports = apiController;