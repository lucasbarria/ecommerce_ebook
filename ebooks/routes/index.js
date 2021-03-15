var express = require('express');
const { user } = require('../controllers/apisController');
var router = express.Router();
const indexController = require('../controllers/indexController');
const usermiddleware = require('../middlewares/userMiddleware');

/* GET home page. */
router.get('/', indexController.home);
router.get('/productDetail/:id', indexController.productDetail);

// Cart
router.get('/cart', usermiddleware.user, indexController.productCart);
router.get('/cart/:id', usermiddleware.user,indexController.addToCart);
router.get('/cart/delete/:id', indexController.delete);

/* Search bar */
router.get('/search', indexController.search)

router.get('/purchaseCompleted', indexController.purchaseComplete);


module.exports = router;
