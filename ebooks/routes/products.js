var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
const usermiddleware = require('../middlewares/userMiddleware');

// Creación de productos
router.get('/create', usermiddleware.admin ,productController.create);
router.post('/create', productController.store);

// Edicion de productos 
router.get('/edit/:id', usermiddleware.admin,productController.edit);
router.post('/edit/:id', productController.update);

//Borrar producto
router.get("/delete/:id", usermiddleware.admin,productController.delete);

//detalle de producto
router.get("/:id", productController.detail);
module.exports = router;
