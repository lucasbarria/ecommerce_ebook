var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("home");
});

router.get('/paginadeproducto', function(req, res, next) {
  res.render("productDetail");
});

router.get('/registro', function(req, res, next) {
  res.render("registro");
});

router.get('/iniciasesion', function(req, res, next) {
  res.render("iniciasesion");
});

router.get('/carrito', function(req, res, next) {
  res.render("productCart");
});

module.exports = router;
