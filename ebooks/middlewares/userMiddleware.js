const fs = require('fs');
let usersList = fs.readFileSync('./database/users.json');

const userMiddleware = {
    sesioniniciada: function(req, res, next) {
        let user = req.body;
        for(i = 0; i < usersList.length; i++){
            if(usersList[i].email && usersList[i].pass != user){
                res.send('usuario incorrecto');
            }else next();
        }
    },
}

module.exports = userMiddleware;