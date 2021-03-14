var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const usermiddleware = require('../middlewares/userMiddleware');

/* GET home page. */
router.get('/', indexController.home);
router.get('/productDetail/:id', indexController.productDetail);
router.get('/cart/:id', usermiddleware.user,indexController.addToCart);

/* Search bar */
router.get('/search', indexController.search)

router.get('/purchaseCompleted', indexController.purchaseComplete);


module.exports = router;
