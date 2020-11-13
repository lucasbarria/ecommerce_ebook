var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

// Creación de productos
router.get('/crearproducto', productController.crearProducto);
router.post('/crearproducto', productController.create);

// Edicion de productos 
router.get('/editarproducto/:id', productController.editarProducto);
router.post('/editarproducto/:id', productController.edit);

module.exports = router;
