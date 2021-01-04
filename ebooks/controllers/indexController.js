const indexController = {
    home: function(req, res, next) {
        res.render('home');
      },
    productDetail: function(req, res, next) {
        res.render("productDetail");
      },
    productCart: function(req, res, next) {
        res.render("productCart");
      },
    editar: function(req, res, next) {

      res.render('editarusuario');
    }
}

module.exports = indexController
