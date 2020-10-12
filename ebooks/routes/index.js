var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("'index', { title: 'Express' }");
});

router.get('/paginaDeProducto', function(req, res, next) {
  res.render("productDetail");
});

router.get('/registro', function(req, res, next) {
  res.render("registro");
});
module.exports = router;
