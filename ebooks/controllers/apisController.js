const db = require('../dataBase/models');
const products = require('../dataBase/models/products');
const users= require('../dataBase/models/users');

const apiController = {
    user: function(req, res, next) {
        db.users.findAll({users})
        .then(function(data){
            let response = {
                status: "ok",
                state: 200,
                response: JSON.stringify(data.length)
            }
            res.send(response)
        })
    },
    products: function(req, res, next){
        db.products.findAll({products})
        .then(function(data){
            let response = {
                status: "ok",
                state: 200,
                response: JSON.stringify(data.length)
            }
            res.send(response)
        })
    },
    list: function(req, res){
        db.users.findAll({users})
        .then(function(users){

            let response = {
                meta: {
                    status: 200,
                    total: users.length,
                    url: '/api/'
                },
                data: users
            };
            res.json(response);
        })
    }
};

module.exports = apiController;