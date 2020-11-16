var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
 
// Creación de productos
router.get('/crearproducto', productController.create);
router.post('/crearproducto', productController.store);

// Edicion de productos 
router.get('/editarproducto/:id', productController.edit);
router.post('/editarproducto/:id', productController.update);

module.exports = router;
