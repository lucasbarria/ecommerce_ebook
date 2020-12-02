const fs = require('fs');
let usersList = JSON.parse(fs.readFileSync('./database/users.json'));

const userController = {
    create: function (req, res){
        res.render('register')
    },
    store: function (req, res){
        let nuevoId = usersList.length > 0 ? usersList[usersList.length - 1].id + 1 : 1;
        let users = {
            // id: req.body.id,
            id: nuevoId,
            nombre: req.body.nome,
            email: req.body.email,
            pass: req.body.pass,
            date: req.body.date,
            Usuario: req.body.usuario
        }
        usersList.push(users);
        let usersListJSON = JSON.stringify(usersList,null,2);
        fs.writeFileSync('./database/users.json', usersListJSON);
        res.redirect('/');
    },
    edit: function (req, res){
        let id = req.params.id;
        let userFound;
        for(let i=0; i<usersList.length; i++){
            if (usersList[i].id == id){
                userFound = usersList[i];
                break;
            }
        }
        if (userFound){
            return res.render('editarusuario', {userFound});
        }else {
            return res.send("Usuario Invalido");
        }
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
        fs.writeFileSync('./database/users.json', JSON.stringify(usersListEdit,null,2));
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
            fs.writeFileSync('./database/users.json', deleteUserJSON);
            res.send("Usuario Eliminado");
        }else {
            res.send("Usuario No Encontrado");
        }
    }
}

module.exports = userController;
