var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const usermiddleware = require('../middlewares/userMiddleware');

/* GET home page. */
router.get('/', indexController.home);
router.get('/productDetail/:id', indexController.productDetail);
router.get('/cart', indexController.productCart);
router.get('/search', indexController.search);


module.exports = router;
