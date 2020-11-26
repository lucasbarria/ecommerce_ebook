var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
 
// Creación de productos
router.get('/crear', productController.create);
router.post('/crear', productController.store);

// Edicion de productos 
router.get('/editar/:id', productController.edit);
router.post('/editar/:id', productController.update);

//Borrar producto
router.get("/borrar/:id", productController.delete);

module.exports = router;
