var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.home);
router.get('/paginadeproducto', indexController.productDetail);
router.get('/registro', indexController.register);
router.get('/iniciasesion', indexController.iniciasesion);
router.get('/carrito', indexController.productCart);

module.exports = router;
