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

router.get('/iniciasesion', function(req, res, next) {
  res.render("iniciasesion");
});

<<<<<<< HEAD
router.get('/carrito', function(req, res, next) {
  res.render("productCart");
=======
router.get('/home', function(req, res, next) {
  res.render("home");
>>>>>>> 10bd0776b59504716a8db4f27792d285e5e078dc
});
module.exports = router;
