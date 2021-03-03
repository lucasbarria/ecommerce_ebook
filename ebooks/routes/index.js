var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const usermiddleware = require('../middlewares/userMiddleware');

/* GET home page. */
router.get('/', usermiddleware.admin, indexController.home);
router.get('/productDetail/:id', indexController.productDetail);
router.get('/cart', indexController.productCart);

/* Search bar */
router.get('/search', indexController.search)


module.exports = router;
