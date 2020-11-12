var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

// Creación y edición de productos
router.get('/crearProducto', productController.crearProducto);
router.post('/crearProducto', productController.create)

module.exports = router;
