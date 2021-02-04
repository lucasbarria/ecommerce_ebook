var express = require('express');
var router = express.Router();
const apisController = require('../controllers/apisController');

router.get('/users', apisController.user);

router.get('/products', apisController.products);

router.get('/sales', apisController.sales);

module.exports = router;