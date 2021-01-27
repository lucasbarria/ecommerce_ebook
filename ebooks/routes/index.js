var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.home);
router.get('/productDetail', indexController.productDetail);
router.get('/cart', indexController.productCart);

module.exports = router;
