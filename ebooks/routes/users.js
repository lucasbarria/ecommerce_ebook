var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

// Creación de usuarios
router.get('/registro', userController.create);
router.post('/registro', userController.store);

// Edicion de usuarios 
router.get('/editar/:id', userController.edit);
router.post('/editar/:id', userController.update);

//Eliminar usuario
router.get("/borrar/:id", userController.delete);

module.exports = router;
