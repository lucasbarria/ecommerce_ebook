let { check, validationResult, body} = require('express-validator');
var express = require('express');
const userController = require('../controllers/userController');
const usermiddleware = require('../middlewares/userMiddleware');
var router = express.Router();

// Creación de usuarios
router.get('/register',usermiddleware.userlogged, userController.create);
router.post('/register', [
    check('name').notEmpty().withMessage('Este campo esta incompleto'),
    check('email').isEmail().withMessage('Email invalido'),
    check('pass').isLength({min:6}).withMessage('La contrasena debe tener al menos 6 caracteres'),
    check('user')
], userController.store);

// Edicion de usuarios 
router.get('/edit/:id', userController.edit);
router.post('/edit/:id', userController.update);

//Eliminar usuario
router.get("/delete/:id", userController.delete);

//iniciar sesion
router.get('/login', usermiddleware.userlogged, userController.login);
router.post('/login', usermiddleware.userlogged, userController.loggedin);

//cerrar sesion
router.get('/logout', userController.logout);

router.get('/profile/:id', userController.userProfile);


module.exports = router;
