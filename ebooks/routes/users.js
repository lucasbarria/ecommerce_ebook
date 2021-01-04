let { check, validationResult, body} = require('express-validator');
var express = require('express');
const userController = require('../controllers/userController');
const usermiddleware = require('../middlewares/userMiddleware');
var router = express.Router();

// Creación de usuarios
router.get('/registro', userController.create);
router.post('/registro', [
    check('name').isLength().withMessage('Este campo esta incompleto'),
    check('email').isEmail().withMessage('Email invalido'),
    check('pass').isLength({min:8}).withMessage('La contrasena debe tener al menos 8 caracteres'),
    check('usuario')
], userController.store);

// Edicion de usuarios 
router.get('/editar/:id', userController.edit);
router.post('/editar/:id', userController.update);

//Eliminar usuario
router.get("/borrar/:id", userController.delete);

//iniciar sesion
router.get('/iniciasesion', userController.iniciasesion);
router.post('/iniciasesion', usermiddleware.sesioniniciada, userController.sesioniniciada);


module.exports = router;
